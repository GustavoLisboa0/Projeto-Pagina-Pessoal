/*
 * CONTEÚDO DA PÁGINA
 * Edite este arquivo para mudar projetos, curiosidades, experiência e habilidades.
 * Nada precisa mudar no HTML.
 *
 * COMO ADICIONAR MÍDIA A UM PROJETO
 * 1. Coloque os arquivos em Assets/Projetos/<id-do-projeto>/  (ex.: Assets/Projetos/tcc-sentimento/)
 * 2. Preencha no projeto:
 *    capa:   "Assets/Projetos/tcc-sentimento/capa.jpg"          -> imagem do card
 *    video:  { tipo: "youtube", id: "dQw4w9WgXcQ" }              -> vídeo do YouTube (id do link)
 *       ou   { tipo: "arquivo", src: "Assets/Projetos/tcc-sentimento/demo.mp4" }
 *    fotos:  [{ src: "Assets/Projetos/tcc-sentimento/1.jpg", alt: "Tela do dashboard" }, ...]
 * Dica: use imagens .webp/.jpg com até ~1600px de largura e vídeos .mp4 curtos (ou YouTube, que é mais leve).
 */

const PROJETOS = [
    {
        id: "tcc-sentimento",
        titulo: "Análise de Sentimento em Redes Sociais",
        resumo: "TCC com IA: extração de dados da rede X, análise de sentimento, comunidades e bolhas sociais em um dashboard interativo.",
        categoria: "ia",
        contexto: "TCC · Engenharia de Software",
        destaque: true,
        tags: ["IA", "NLP", "Python", "Dashboard"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Meu Trabalho de Conclusão de Curso: um sistema que coleta publicações da rede X e usa IA para classificar o sentimento de cada uma.",
            "Além do sentimento, o sistema identifica comunidades e bolhas sociais — grupos que conversam entre si e reforçam as mesmas opiniões — e apresenta tudo em um dashboard interativo."
        ],
        links: []
    },
    {
        id: "automacoes-ia",
        titulo: "Automações com IA para CRMs",
        resumo: "Atendimento com IA, funil de vendas, captação, agendamento e follow-ups automáticos para clientes reais.",
        categoria: "ia",
        contexto: "Bluelephant AI · 2025 – atual",
        destaque: true,
        tags: ["Prompt Engineering", "n8n", "GoHighLevel", "Zatten"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Na Bluelephant AI implemento soluções completas de automação dentro do Zatten e do GoHighLevel, CRMs com IA integrada, para clientes de vários nichos.",
            "Os fluxos cobrem atendimento com IA, funil de vendas, captação de leads, agendamento e integração com processos externos ao sistema.",
            "Também desenvolvi follow-ups automatizados com IA, que mantêm o relacionamento com leads e clientes de forma contínua e personalizada."
        ],
        links: []
    },
    {
        id: "dashboards-bi",
        titulo: "ETL e Dashboards de BI",
        resumo: "Pipeline de dados do ERP até dashboards de DRE, financeiro e comercial usados pela liderança.",
        categoria: "dados",
        contexto: "Dwin Brindes · 2022 – 2025",
        destaque: true,
        tags: ["SQL", "ETL", "Power BI", "Python"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Fui responsável pelo processo de ETL dos dados extraídos do ERP da empresa: extração, tratamento e organização para relatórios e dashboards.",
            "Construí e mantive dashboards estratégicos — DRE, análise financeira e gestão comercial — usados diretamente pela liderança na tomada de decisão.",
            "Usei SQL para consultas e otimização e Python para automatizar etapas do processo analítico. Sigo apoiando o projeto como freelancer."
        ],
        links: []
    },
    {
        id: "painel-rotas",
        titulo: "Painel de Controle de Rotas",
        resumo: "App web da expedição: romaneio de pedidos, retiradas e rotas do dia no mapa, lendo direto do pipeline de dados.",
        categoria: "dados",
        contexto: "Dwin Brindes · 2026",
        destaque: true,
        tags: ["React", "FastAPI", "PostgreSQL", "Leaflet"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "App web que a expedição da Dwin Brindes usa para planejar as entregas: quais pedidos saem, em qual rota, em que ordem e em que status está cada item.",
            "O romaneio separa os pedidos em grupos (do dia, adiantados, próximos envios e antigos), com filtros e alertas automáticos de evento, prazo curto e pedido sem data de envio.",
            "Na tela de rotas, cada parada aparece num mapa (Leaflet + OpenStreetMap): os endereços são geocodificados com cache, o trajeto é calculado com retorno à empresa e o motorista recebe links prontos para Google Maps e Waze.",
            "O backend em FastAPI lê a camada gold do pipeline de dados no PostgreSQL com um usuário de acesso restrito. Tudo o que o app grava fica num schema próprio, com histórico append-only. O frontend é React + Vite, com login, gestão de usuários e modo escuro."
        ],
        links: []
    },
    {
        id: "futebol-amador",
        titulo: "Gestão de Futebol Amador",
        resumo: "Aplicação para organizar as partidas mensais e as estatísticas do Suprema Corte FC, o time dos amigos.",
        categoria: "web",
        contexto: "Projeto acadêmico",
        tags: ["TypeScript", "Web", "Gestão"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Aplicação criada para organizar e gerir as partidas mensais de futebol de um grupo de amigos, com as estatísticas do clube amador Suprema Corte FC."
        ],
        links: [
            { rotulo: "GitHub", url: "https://github.com/GustavoLisboa0/Statistics-Suprema-Corte-FC" }
        ]
    },
    {
        id: "mypetz",
        titulo: "MyPetz",
        resumo: "StartUp desenvolvida na UniCesumar: aplicativo e site para tutores de pets.",
        categoria: "web",
        contexto: "UniCesumar · em equipe",
        tags: ["HTML", "CSS", "JavaScript", "StartUp"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Projeto de desenvolvimento de uma StartUp feito na UniCesumar, em equipe com Bruno Carraro, Mayke Correia e Gustavo Biscoto."
        ],
        links: [
            { rotulo: "Ver site", url: "https://mypetzz.netlify.app/" },
            { rotulo: "GitHub", url: "https://github.com/carrarook/MypetzSite/tree/main/Mypetz" }
        ]
    },
    {
        id: "internexus",
        titulo: "InterNexus",
        resumo: "Atividade de Estudo Programado da UniCesumar, publicada como site.",
        categoria: "web",
        contexto: "UniCesumar · em equipe",
        tags: ["HTML", "CSS", "JavaScript"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Atividade de Estudo Programado feita na UniCesumar, em equipe com Bruno Carraro e Mayke Correia."
        ],
        links: [
            { rotulo: "Ver site", url: "https://carrarook.github.io/InterNexus/" },
            { rotulo: "GitHub", url: "https://github.com/carrarook/InterNexus" }
        ]
    },
    {
        id: "gestao-escolar",
        titulo: "Gestão Escolar",
        resumo: "Sistema de gestão escolar desenvolvido em aula.",
        categoria: "web",
        contexto: "UniCesumar · em equipe",
        tags: ["Sistema", "CRUD"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Projeto ofertado em aula na UniCesumar, em equipe com Bruno Carraro, Mayke Correia e Gustavo Biscoto."
        ],
        links: [
            { rotulo: "GitHub", url: "https://github.com/carrarook/GestaoEscolar" }
        ]
    },
    {
        id: "jogo-da-velha",
        titulo: "Jogo da Velha",
        resumo: "Jogo da velha para navegador feito em equipe.",
        categoria: "web",
        contexto: "UniCesumar · em equipe",
        tags: ["JavaScript", "Jogo"],
        capa: "",
        video: null,
        fotos: [],
        descricao: [
            "Projeto ofertado em aula na UniCesumar, em equipe com Bruno Carraro, Mayke Correia e Gustavo Biscoto."
        ],
        links: [
            { rotulo: "Jogar", url: "https://maykecorreia.github.io/JogodaVelha/" },
            { rotulo: "GitHub", url: "https://github.com/MaykeCorreia/JogodaVelha" }
        ]
    }
];

// Troque ou acrescente as suas. "icone": car, trophy, waves, music, pin, chart, spark, bot, code, image.
const CURIOSIDADES = [
    { icone: "trophy", titulo: "Tenho um time", texto: "Jogo bola e tenho um time, o Suprema Corte FC — que tem até sistema de estatísticas feito por mim." },
    { icone: "car", titulo: "Colecionador", texto: "Coleciono miniaturas de carros." },
    { icone: "waves", titulo: "Surfista", texto: "Gosto de surfar e de pegar onda sempre que dá." },
    { icone: "music", titulo: "Trilha sonora", texto: "Ouço muita música brasileira: rap, trap e MPB." },
    { icone: "pin", titulo: "Curitibano", texto: "Nasci em Curitiba-PR e trabalho remoto daqui." },
    { icone: "chart", titulo: "Comecei como estagiário", texto: "Entrei como estagiário em 2019, fui efetivado e cheguei a liderar uma troca de ERP antes de virar analista de dados." },
    { icone: "spark", titulo: "Apresentei para a Renault", texto: "No Renault Transformation Day (2023) apresentei um projeto de viabilidade para a empresa." },
    { icone: "bot", titulo: "Mentor na faculdade", texto: "Fui participante e mentor em projetos de extensão com turmas de até 200 alunos." }
];

const EXPERIENCIA = [
    {
        cargo: "AI Engineer — Automação de IA & Dados",
        empresa: "Bluelephant AI (PJ)",
        periodo: "Set/2025 – atual",
        texto: "Engenharia de prompt, desenho de fluxos e automações de IA e análise de dados para clientes de múltiplos nichos.",
        stack: ["Prompt Engineering", "n8n", "Python", "Zatten", "GoHighLevel"]
    },
    {
        cargo: "Analista de Dados (Freelancer)",
        empresa: "Dwin Brindes",
        periodo: "Set/2025 – atual",
        texto: "Suporte em features específicas do projeto de ETL e BI construído durante o período CLT.",
        stack: ["SQL", "ETL", "Power BI"]
    },
    {
        cargo: "Analista de Dados",
        empresa: "Dwin Brindes",
        periodo: "Mar/2022 – Ago/2025",
        texto: "ETL dos dados do ERP e dashboards estratégicos (DRE, financeiro, comercial) para a liderança. Comecei no administrativo liderando a transição de ERP.",
        stack: ["SQL", "ETL", "Power BI", "Python"]
    },
    {
        cargo: "Auxiliar de Escritório / Estagiário",
        empresa: "Vip Repair Center — Curitiba, PR",
        periodo: "Dez/2019 – Dez/2021",
        texto: "De estagiário a efetivo, reorganizando fluxos logísticos do setor junto ao ERP da empresa.",
        stack: ["ERP", "Logística"]
    }
];

const HABILIDADES = [
    {
        icone: "bot",
        titulo: "IA & Automação",
        itens: ["Engenharia de prompt e LLMs", "Automações com IA", "Workflows com n8n", "CRMs com IA (Zatten, GoHighLevel)", "Follow-ups automatizados"]
    },
    {
        icone: "chart",
        titulo: "Dados & BI",
        itens: ["SQL", "ETL", "Power BI", "Modelagem e dashboards", "Python para análise"]
    },
    {
        icone: "code",
        titulo: "Desenvolvimento",
        itens: ["Python", "TypeScript / JavaScript", "React", "HTML / CSS", "C / C++", "Git", "PostgreSQL", "Máquinas virtuais"]
    }
];
