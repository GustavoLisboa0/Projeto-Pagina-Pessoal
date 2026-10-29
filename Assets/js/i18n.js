/*
 * TEXTOS DA INTERFACE (PT / EN)
 * TEXTOS_EN: textos fixos do index.html, ligados pelo atributo data-i18n="chave".
 *            O português continua escrito no próprio HTML (é lido de lá ao carregar).
 * UI:        textos gerados pelo script.js, nos dois idiomas.
 */

const TEXTOS_EN = {
    "skip": "Skip to content",
    "aria.inicio": "Home",
    "aria.menu": "Open menu",
    "aria.principal": "Main",
    "aria.redes": "Social links",
    "aria.destaques": "Highlights",
    "aria.filtros": "Filter projects",
    "aria.fotos": "Photos of me at different stages",
    "aria.fechar": "Close",

    "nav.sobre": "About",
    "nav.projetos": "Projects",
    "nav.experiencia": "Experience",
    "nav.habilidades": "Skills",
    "nav.contato": "Contact",

    "hero.eyebrow": "AI Engineer at Bluelephant AI · Remote",
    "hero.titulo": "I turn manual processes into <span class=\"hl\">AI automations</span> and data into decisions.",
    "hero.lead": "I'm Gustavo Lisboa, from Curitiba, Brazil. I work with prompt engineering, n8n workflows, AI-powered CRMs and BI — and I study Software Engineering at UniCesumar.",
    "hero.cta1": "See projects",
    "hero.cta2": "Get in touch",
    "hero.term": `{
  <k>"name"</k>: <s>"Gustavo Lisboa"</s>,
  <k>"role"</k>: <s>"AI Engineer"</s>,
  <k>"based_in"</k>: <s>"Curitiba, BR"</s>,
  <k>"focus"</k>: [
    <s>"AI automation"</s>,
    <s>"prompt engineering"</s>,
    <s>"integrations & CRMs"</s>,
    <s>"ETL + Power BI"</s>
  ],
  <k>"stack"</k>: [<s>"Python"</s>, <s>"n8n"</s>, <s>"SQL"</s>, <s>"TS"</s>],
  <k>"english"</k>: <s>"B2"</s>,
  <k>"available"</k>: <b>true</b>
}<span class="caret"></span>`,

    "stats.1": "started in data analysis",
    "stats.2": "AI Engineer at an AI solutions company",
    "stats.3": "students per class mentored in extension projects",
    "stats.4": "English",

    "sobre.kicker": "01 — Who I am",
    "sobre.titulo": "Curious, determined and driven by challenges.",
    "sobre.p1": "My name is <strong>Gustavo Lisboa Cansian Pinto</strong> and I was born in Curitiba, Brazil. I started early as an intern, reorganizing logistics flows alongside the ERP of an electronics repair company — and was hired full-time. Later I led the ERP migration at Dwin Brindes and gradually moved into data analysis: ETL, SQL, Python and Power BI dashboards that leadership uses to make decisions.",
    "sobre.p2": "Today I'm an <strong>AI Engineer</strong> at Bluelephant AI, designing automations and integrations for clients across many industries: AI customer service, sales funnels, scheduling and automated follow-ups.",
    "sobre.p3": "I look for challenges that make me grow, and I want to have a positive impact on the people around me — whether in a chat with friends or in a professional project.",
    "foto.1.legenda": "v0.1 · childhood",
    "foto.1.alt": "Gustavo as a child",
    "foto.2.legenda": "v1.0 · beach & bodyboard",
    "foto.2.alt": "Gustavo as a teenager at the beach holding a bodyboard",
    "foto.3.legenda": "v2.0 · current version",
    "foto.3.alt": "Gustavo today, in a mirror selfie",
    "curios.titulo": "Fun facts about me",

    "projetos.kicker": "02 — Projects",
    "projetos.titulo": "What I've built.",
    "projetos.sub": "Click a project to see its video, photos and details.",
    "filtro.todos": "All",
    "filtro.ia": "AI & Automation",
    "filtro.dados": "Data & BI",
    "filtro.pessoal": "Personal projects",
    "filtro.web": "University",

    "exp.kicker": "03 — Career",
    "exp.titulo": "From intern to AI Engineer.",
    "edu.formacao": "Education",
    "edu.curso": "<strong>Software Engineering (Bachelor's)</strong> — UniCesumar",
    "edu.cert": "Certifications",
    "edu.cert2": "Power BI Dashboards Course — CPB9 (2025)",

    "skills.kicker": "04 — Skills",
    "skills.titulo": "Everyday tools.",

    "contato.kicker": "05 — Contact",
    "contato.titulo": "Got a process that could be automated?<br><span class=\"hl\">Let's talk.</span>",
    "contato.copiar": "Copy",

    "footer.topo": "Back to top ↑"
};

const UI = {
    pt: {
        tituloPagina: "Gustavo Lisboa · AI Engineer & Dados",
        descricaoPagina: "Gustavo Lisboa — AI Engineer focado em automação com IA, engenharia de prompt, integração de sistemas e análise de dados. Curitiba, Brasil.",
        trocarIdioma: "Switch to English",
        siglaOutroIdioma: "EN",
        categorias: { ia: "IA & Automação", dados: "Dados & BI", pessoal: "Projetos pessoais", web: "Faculdade" },
        rotulos: {},
        verDetalhes: "Ver detalhes",
        verDetalhesDe: "Ver detalhes de",
        video: "Vídeo",
        videoTitulo: "Vídeo do projeto",
        foto: "Foto",
        mostrar: "Mostrar",
        emBreve: "Vídeo e fotos em breve",
        emailCopiado: "E-mail copiado!"
    },
    en: {
        tituloPagina: "Gustavo Lisboa · AI Engineer & Data",
        descricaoPagina: "Gustavo Lisboa — AI Engineer focused on AI automation, prompt engineering, systems integration and data analysis. Curitiba, Brazil.",
        trocarIdioma: "Mudar para português",
        siglaOutroIdioma: "PT",
        categorias: { ia: "AI & Automation", dados: "Data & BI", pessoal: "Personal projects", web: "University" },
        rotulos: { "Ver site": "View site", "Jogar": "Play" },
        verDetalhes: "See details",
        verDetalhesDe: "See details of",
        video: "Video",
        videoTitulo: "Project video",
        foto: "Photo",
        mostrar: "Show",
        emBreve: "Video and photos coming soon",
        emailCopiado: "Email copied!"
    }
};
