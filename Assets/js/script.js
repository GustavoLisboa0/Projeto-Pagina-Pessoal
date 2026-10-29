const $ = (sel, root = document) => root.querySelector(sel);
const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ICONE_CATEGORIA = { ia: "bot", dados: "chart", pessoal: "spark", web: "code" };

const icone = (nome) => `<svg class="ic" aria-hidden="true"><use href="#i-${nome}"/></svg>`;

const escapar = (texto) => String(texto).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
));

/* ---------- IDIOMA ---------- */

// Ordem: ?lang= na URL > escolha salva > idioma do navegador
const IDIOMAS = ["pt", "en"];
let idioma = idiomaInicial();
const t = (chave) => UI[idioma][chave];

function idiomaInicial() {
    const daUrl = new URLSearchParams(location.search).get("lang");
    if (IDIOMAS.includes(daUrl)) return daUrl;
    try {
        const salvo = localStorage.getItem("idioma");
        if (IDIOMAS.includes(salvo)) return salvo;
    } catch { /* armazenamento bloqueado: segue para o navegador */ }
    return (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
}

// Conteúdo no idioma atual: data.js com os campos de data.en.js por cima
const traduzir = (base, en) => (idioma === "en" && en ? { ...base, ...en } : base);
const projetos = () => PROJETOS.map((p) => traduzir(p, PROJETOS_EN[p.id]));
const curiosidades = () => CURIOSIDADES.map((c, i) => traduzir(c, CURIOSIDADES_EN[i]));
const experiencia = () => EXPERIENCIA.map((x, i) => traduzir(x, EXPERIENCIA_EN[i]));
const habilidades = () => HABILIDADES.map((h, i) => traduzir(h, HABILIDADES_EN[i]));

// Textos fixos do HTML: o português é lido da própria página ao carregar
const textosPt = [...document.querySelectorAll("[data-i18n]")].map((el) => [el, el.innerHTML]);
const atributosPt = [...document.querySelectorAll("[data-i18n-attr]")].flatMap((el) =>
    el.dataset.i18nAttr.split(",").map((par) => {
        const [attr, chave] = par.split(":");
        return [el, attr, chave, el.getAttribute(attr)];
    })
);

function aplicarTextosFixos() {
    const en = idioma === "en";
    textosPt.forEach(([el, pt]) => { el.innerHTML = en ? (TEXTOS_EN[el.dataset.i18n] ?? pt) : pt; });
    atributosPt.forEach(([el, attr, chave, pt]) => el.setAttribute(attr, en ? (TEXTOS_EN[chave] ?? pt) : pt));

    document.documentElement.lang = en ? "en" : "pt-br";
    document.title = t("tituloPagina");
    $('meta[name="description"]').setAttribute("content", t("descricaoPagina"));

    const botao = $("#btn-idioma");
    botao.setAttribute("aria-label", t("trocarIdioma"));
    botao.title = t("trocarIdioma");
    $("#btn-idioma-sigla").textContent = t("siglaOutroIdioma");
}

function mudarIdioma(novo) {
    idioma = novo;
    try { localStorage.setItem("idioma", novo); } catch { /* sem armazenamento: vale só nesta visita */ }

    const url = new URL(location.href);
    if (novo === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);

    aplicarTextosFixos();
    renderConteudo();
    filtrarProjetos(filtroAtual);
    // O visitante já viu a página: o conteúdo redesenhado aparece direto, sem animar de novo
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
    marcarSecaoAtual();
}

/* ---------- PROJETOS ---------- */

let filtroAtual = "todos";

// Imagem do card: capa > primeira foto > thumbnail do YouTube > arte gerada
function capaDoProjeto(p) {
    if (p.capa) return p.capa;
    if (p.fotos && p.fotos.length) return p.fotos[0].src;
    if (p.video && p.video.tipo === "youtube") return `https://i.ytimg.com/vi/${p.video.id}/hqdefault.jpg`;
    return "";
}

function cardProjeto(p) {
    const capa = capaDoProjeto(p);
    const midia = capa
        ? `<img src="${escapar(capa)}" alt="" loading="lazy">`
        : `<div class="card__art card__art--${p.categoria}">${icone(ICONE_CATEGORIA[p.categoria])}<span>${t("categorias")[p.categoria]}</span></div>`;
    const temVideo = p.video ? `<span class="card__badge">${icone("play")} ${t("video")}</span>` : "";
    const tamanho = p.largo ? "card--largo" : p.destaque ? "card--destaque" : "";

    return `
        <article class="card ${tamanho} reveal" data-categoria="${p.categoria}">
            <button class="card__btn" type="button" data-projeto="${p.id}" aria-label="${t("verDetalhesDe")} ${escapar(p.titulo)}">
                <div class="card__media">${midia}${temVideo}</div>
                <div class="card__body">
                    <p class="card__ctx">${escapar(p.contexto)}</p>
                    <h3 class="card__title">${escapar(p.titulo)}</h3>
                    <p class="card__text">${escapar(p.resumo)}</p>
                    <ul class="tags">${p.tags.map((tag) => `<li>${escapar(tag)}</li>`).join("")}</ul>
                    <span class="card__more">${t("verDetalhes")} ${icone("arrow")}</span>
                </div>
            </button>
        </article>`;
}

function renderProjetos() {
    $("#lista-projetos").innerHTML = projetos().map(cardProjeto).join("");
}

function filtrarProjetos(filtro) {
    filtroAtual = filtro;
    document.querySelectorAll(".filters .chip").forEach((chip) => {
        const ativo = chip.dataset.filter === filtro;
        chip.classList.toggle("is-active", ativo);
        chip.setAttribute("aria-pressed", ativo);
    });
    document.querySelectorAll("#lista-projetos .card").forEach((card) => {
        card.hidden = filtro !== "todos" && card.dataset.categoria !== filtro;
    });
}

/* ---------- MODAL ---------- */

const modal = $("#modal-projeto");

function midiaPrincipal(item) {
    if (item.tipo === "youtube") {
        return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}" title="${t("videoTitulo")}"
            allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
    }
    if (item.tipo === "arquivo") {
        const poster = item.poster ? ` poster="${escapar(item.poster)}"` : "";
        return `<video src="${escapar(item.src)}"${poster} controls playsinline preload="metadata"></video>`;
    }
    return `<img src="${escapar(item.src)}" alt="${escapar(item.alt || "")}">`;
}

function miniatura(item) {
    if (item.tipo === "youtube") return `https://i.ytimg.com/vi/${item.id}/default.jpg`;
    if (item.tipo === "arquivo") return item.poster || "";
    return item.src;
}

function abrirProjeto(id) {
    const p = projetos().find((proj) => proj.id === id);
    if (!p) return;

    const itens = [];
    if (p.video) itens.push(p.video);
    (p.fotos || []).forEach((f) => itens.push({ tipo: "foto", ...f }));

    const media = $("#modal-media");
    const thumbs = $("#modal-thumbs");

    media.innerHTML = itens.length
        ? midiaPrincipal(itens[0])
        : `<div class="card__art card__art--${p.categoria}">${icone(ICONE_CATEGORIA[p.categoria])}<span>${t("emBreve")}</span></div>`;

    thumbs.hidden = itens.length < 2;
    thumbs.innerHTML = itens.map((item, i) => {
        const img = miniatura(item);
        const rotulo = item.tipo === "foto" ? (item.alt || `${t("foto")} ${i}`) : t("video");
        return `<button type="button" class="thumb ${i === 0 ? "is-active" : ""}" data-indice="${i}" aria-label="${t("mostrar")} ${escapar(rotulo)}">
            ${img ? `<img src="${escapar(img)}" alt="">` : ""}${item.tipo !== "foto" ? icone("play") : ""}
        </button>`;
    }).join("");

    thumbs.onclick = (e) => {
        const btn = e.target.closest(".thumb");
        if (!btn) return;
        media.innerHTML = midiaPrincipal(itens[btn.dataset.indice]);
        thumbs.querySelectorAll(".thumb").forEach((th) => th.classList.toggle("is-active", th === btn));
    };

    // O contexto dos projetos pessoais já começa com "Projeto pessoal": não repete a categoria
    $("#modal-meta").textContent = p.categoria === "pessoal" ? p.contexto : `${t("categorias")[p.categoria]} · ${p.contexto}`;
    $("#modal-titulo").textContent = p.titulo;
    $("#modal-tags").innerHTML = p.tags.map((tag) => `<li>${escapar(tag)}</li>`).join("");
    $("#modal-desc").innerHTML = p.descricao.map((par) => `<p>${escapar(par)}</p>`).join("");
    $("#modal-links").innerHTML = (p.links || []).map((l) =>
        `<a class="btn btn--ghost btn--sm" href="${escapar(l.url)}" target="_blank" rel="noopener">${escapar(t("rotulos")[l.rotulo] || l.rotulo)} ${icone("arrow")}</a>`
    ).join("");

    modal.showModal();
    document.body.classList.add("sem-scroll");
    history.replaceState(null, "", `#projeto-${p.id}`);
}

function fecharModal() {
    modal.close();
}

modal.addEventListener("close", () => {
    $("#modal-media").innerHTML = ""; // para vídeos que estiverem tocando
    document.body.classList.remove("sem-scroll");
    history.replaceState(null, "", location.pathname + location.search);
});

modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) fecharModal();
});

/* ---------- OUTRAS SEÇÕES ---------- */

function renderCuriosidades() {
    $("#curiosidades").innerHTML = curiosidades().map((c) => `
        <li class="curio">
            <span class="curio__icon">${icone(c.icone)}</span>
            <div><h4>${escapar(c.titulo)}</h4><p>${escapar(c.texto)}</p></div>
        </li>`).join("");
}

function renderExperiencia() {
    $("#timeline").innerHTML = experiencia().map((x) => `
        <li class="tl reveal">
            <p class="tl__period">${escapar(x.periodo)}</p>
            <div class="tl__body">
                <h3>${escapar(x.cargo)}</h3>
                <p class="tl__company">${escapar(x.empresa)}</p>
                <p>${escapar(x.texto)}</p>
                <ul class="tags">${x.stack.map((s) => `<li>${escapar(s)}</li>`).join("")}</ul>
            </div>
        </li>`).join("");
}

function renderHabilidades() {
    $("#skills").innerHTML = habilidades().map((h) => `
        <div class="skill reveal">
            <span class="skill__icon">${icone(h.icone)}</span>
            <h3>${escapar(h.titulo)}</h3>
            <ul>${h.itens.map((i) => `<li>${escapar(i)}</li>`).join("")}</ul>
        </div>`).join("");
}

function renderConteudo() {
    renderProjetos();
    renderCuriosidades();
    renderExperiencia();
    renderHabilidades();
}

/* ---------- INTERAÇÕES ---------- */

function mostrarToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(mostrarToast.t);
    mostrarToast.t = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

$("#copiar-email").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("glisboa.software@gmail.com");
        mostrarToast(t("emailCopiado"));
    } catch {
        mostrarToast("glisboa.software@gmail.com");
    }
});

$("#btn-idioma").addEventListener("click", () => mudarIdioma(idioma === "pt" ? "en" : "pt"));

const navToggle = $(".nav__toggle");
navToggle.addEventListener("click", () => {
    const aberto = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !aberto);
    document.body.classList.toggle("nav-aberto", !aberto);
});
$("#nav-links").addEventListener("click", (e) => {
    if (e.target.closest("a")) {
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-aberto");
    }
});

// Destaca no menu a seção que está na tela: a última cujo topo passou de 40% da altura.
// No fim da página vale a última seção (Contato é curta e nunca chega a 40%).
const linksMenu = [...document.querySelectorAll("#nav-links a")];
const secoesMenu = linksMenu.map((a) => $(a.getAttribute("href")));

function marcarSecaoAtual() {
    const limite = window.innerHeight * 0.4;
    const noFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let atual = noFim ? secoesMenu.length - 1 : -1;
    if (!noFim) {
        secoesMenu.forEach((secao, i) => {
            if (secao.getBoundingClientRect().top <= limite) atual = i;
        });
    }
    linksMenu.forEach((a, i) => {
        a.classList.toggle("is-active", i === atual);
        if (i === atual) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
    });
}

window.addEventListener("scroll", () => {
    document.body.classList.toggle("rolou", window.scrollY > 12);
    marcarSecaoAtual();
}, { passive: true });
window.addEventListener("resize", marcarSecaoAtual);

function ativarReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduzMovimento || !("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-in"));
        return;
    }
    const obs = new IntersectionObserver((entradas) => {
        entradas.forEach((ent) => {
            if (ent.isIntersecting) {
                ent.target.classList.add("is-in");
                obs.unobserve(ent.target);
            }
        });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => obs.observe(el));
}

/* ---------- INÍCIO ---------- */

aplicarTextosFixos();
renderConteudo();
ativarReveal();
marcarSecaoAtual();

$("#ano").textContent = new Date().getFullYear();

$(".filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip) filtrarProjetos(chip.dataset.filter);
});

$("#lista-projetos").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-projeto]");
    if (btn) abrirProjeto(btn.dataset.projeto);
});

// Link direto para um projeto: index.html#projeto-tcc-sentimento
if (location.hash.startsWith("#projeto-")) abrirProjeto(location.hash.replace("#projeto-", ""));
