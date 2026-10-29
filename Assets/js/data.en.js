/*
 * ENGLISH VERSION OF THE CONTENT
 * Only the texts live here; media (capa, video, fotos.src), links and categories come from data.js.
 * Projects are matched by id; fun facts, experience and skills by position (same order as data.js).
 * Any field set here replaces the Portuguese one — e.g. add `video` to a project to show an English video.
 */

const PROJETOS_EN = {
    "template-bi": {
        titulo: "BI Dashboard Template",
        resumo: "Business Intelligence dashboard with six modules — executive, sales, finance, inventory, logistics and purchasing — plus an AI assistant, on fictional data.",
        contexto: "Personal project · Dashboard template",
        fotos: [
            { src: "Assets/Projetos/template-bi/capa.jpg", alt: "Template BI on a laptop and a phone, showing the Executive module" }
        ],
        descricao: [
            "A BI dashboard template built for sales presentations: a fictional company (a B2B distributor) with realistically generated data, ready to show a client what their own dashboard would look like.",
            "It has six modules: Executive (revenue, margin, average ticket, target and closing forecast), Sales (orders, customers, reactivation and repurchase potential), Finance (cash flow, defaults and aging), Inventory and products (coverage, turnover and critical items), Logistics (freight by carrier, time to dispatch and on-time rate) and Purchasing (stock run-out forecast, suppliers and purchase orders).",
            "Every module has period and sales-channel filters, comparisons with the previous period and the previous year, light and dark mode, and a layout designed for phones too. A simulated AI assistant generates insights for the period and answers questions about the screen.",
            "The frontend is React + TypeScript with Tailwind and Recharts. The FastAPI backend serves data in the same shape a PostgreSQL Gold layer will have, so plugging in a real database just means swapping the repository — and the ETL code (Bronze → Silver → Gold) is already included."
        ]
    },
    "tcc-sentimento": {
        titulo: "Social Media Sentiment Analysis",
        resumo: "AI-powered final thesis: data extraction from X, sentiment analysis, communities and social bubbles in an interactive dashboard.",
        contexto: "Final thesis · Artificial intelligence",
        tags: ["AI", "NLP", "Python", "Dashboard"],
        descricao: [
            "My undergraduate thesis: a system that collects posts from X and uses AI to classify the sentiment of each one.",
            "Beyond sentiment, it identifies communities and social bubbles — groups that talk among themselves and reinforce the same opinions — and presents everything in an interactive dashboard."
        ]
    },
    "automacoes-ia": {
        titulo: "AI Automations for CRMs",
        resumo: "AI customer service, sales funnels, lead capture, scheduling and automated follow-ups for real clients.",
        contexto: "Professional project · AI automation",
        descricao: [
            "As an AI Engineer, I build end-to-end automation solutions in Zatten and GoHighLevel, CRMs with built-in AI, for clients across many industries.",
            "The flows cover AI customer service, sales funnels, lead capture, scheduling and integration with processes outside the system.",
            "I also built AI-driven automated follow-ups that keep the relationship with leads and customers going in a continuous, personalized way."
        ]
    },
    "dashboards-bi": {
        titulo: "ETL and BI Dashboards",
        resumo: "Data pipeline from the ERP to P&L, financial and sales dashboards used by leadership.",
        contexto: "Professional project · ETL and BI",
        descricao: [
            "I was responsible for the ETL process for data extracted from the company's ERP: extraction, cleaning and organization for reports and dashboards.",
            "I built and maintained strategic dashboards — P&L, financial analysis and sales management — used directly by leadership for decision-making.",
            "I used SQL for queries and optimization and Python to automate steps of the analytical process. I still support the project as a freelancer."
        ]
    },
    "painel-rotas": {
        titulo: "Route Control Panel",
        resumo: "Web app for the shipping team: order manifest, pickups and the day's routes on a map, reading straight from the data pipeline.",
        contexto: "Professional project · Logistics app",
        descricao: [
            "A web app a company's shipping team uses to plan deliveries: which orders go out, on which route, in what order and what status each item is in.",
            "The manifest groups orders (today's, early, upcoming and overdue), with filters and automatic alerts for events, tight deadlines and orders without a ship date.",
            "On the routes screen, each stop appears on a map (Leaflet + OpenStreetMap): addresses are geocoded with caching, the route is calculated including the return to the company, and the driver gets ready-made Google Maps and Waze links.",
            "The FastAPI backend reads the gold layer of the PostgreSQL data pipeline through a restricted-access user. Everything the app writes lives in its own schema with append-only history. The frontend is React + Vite, with login, user management and dark mode."
        ]
    },
    "fisco": {
        resumo: "Personal finance organizer: accounts, transactions, installments, investments and reports, with Google login and split expenses.",
        contexto: "Personal project · Personal finance",
        descricao: [
            "Fisco is a personal finance organizer I'm building together with Thiago Luiz. It brings together accounts, income and expenses by category, installment purchases, investments and a dashboard with cash flow and reports.",
            "It's multi-user: login is via Google, only authorized emails get in, and each person sees only their own data. You can also log a shared expense and split it between users.",
            "The backend is FastAPI + SQLAlchemy, with Alembic migrations and over 450 automated tests running in CI. The frontend is React + TypeScript (TanStack Start, Tailwind and shadcn/ui). It all runs on Vercel, with PostgreSQL on Neon.",
            "Since it's a tool with login and financial data, there's no public access or open-source code."
        ]
    },
    "futebol-amador": {
        titulo: "Amateur Football Manager",
        resumo: "App to organize the monthly matches and stats of Suprema Corte FC, my friends' team.",
        contexto: "Personal project · Sports",
        tags: ["TypeScript", "Web", "Management"],
        descricao: [
            "An app built to organize and manage a group of friends' monthly football matches, with the stats of the amateur club Suprema Corte FC."
        ]
    },
    "mypetz": {
        resumo: "Startup developed at UniCesumar: app and website for pet owners.",
        contexto: "UniCesumar · team project",
        tags: ["HTML", "CSS", "JavaScript", "Startup"],
        descricao: [
            "A startup development project at UniCesumar, built as a team with Bruno Carraro, Mayke Correia and Gustavo Biscoto."
        ]
    },
    "internexus": {
        resumo: "Programmed Study Activity at UniCesumar, published as a website.",
        contexto: "UniCesumar · team project",
        descricao: [
            "A Programmed Study Activity at UniCesumar, built as a team with Bruno Carraro and Mayke Correia."
        ]
    },
    "gestao-escolar": {
        titulo: "School Management",
        resumo: "School management system developed in class.",
        contexto: "UniCesumar · team project",
        tags: ["System", "CRUD"],
        descricao: [
            "A class project at UniCesumar, built as a team with Bruno Carraro, Mayke Correia and Gustavo Biscoto."
        ]
    },
    "jogo-da-velha": {
        titulo: "Tic-Tac-Toe",
        resumo: "Browser tic-tac-toe game built as a team.",
        contexto: "UniCesumar · team project",
        tags: ["JavaScript", "Game"],
        descricao: [
            "A class project at UniCesumar, built as a team with Bruno Carraro, Mayke Correia and Gustavo Biscoto."
        ]
    }
};

const CURIOSIDADES_EN = [
    { titulo: "I have a team", texto: "I play football and have my own team, Suprema Corte FC — which even has a stats system I built." },
    { titulo: "Collector", texto: "I collect miniature cars." },
    { titulo: "Surfer", texto: "I love surfing and catching waves whenever I can." },
    { titulo: "Soundtrack", texto: "I listen to a lot of Brazilian music: rap, trap and MPB." },
    { titulo: "From Curitiba", texto: "I was born in Curitiba, Brazil, and work remotely from here." },
    { titulo: "Started as an intern", texto: "I started as an intern in 2019, was hired full-time and even led an ERP migration before becoming a data analyst." },
    { titulo: "Pitched to Renault", texto: "At Renault Transformation Day (2023) I presented a feasibility project to the company." },
    { titulo: "University mentor", texto: "I took part in and mentored extension projects with classes of up to 200 students." }
];

const EXPERIENCIA_EN = [
    {
        cargo: "AI Engineer — AI & Data Automation",
        empresa: "Bluelephant AI (contractor)",
        periodo: "Sep/2025 – present",
        texto: "Prompt engineering, design of AI flows and automations, and data analysis for clients across many industries."
    },
    {
        cargo: "Data Analyst (Freelance)",
        periodo: "Sep/2025 – present",
        texto: "Support for specific features of the ETL and BI project I built while on staff."
    },
    {
        cargo: "Data Analyst",
        periodo: "Mar/2022 – Aug/2025",
        texto: "ETL of ERP data and strategic dashboards (P&L, financial, sales) for leadership. I started in administration, leading the ERP migration."
    },
    {
        cargo: "Office Assistant / Intern",
        periodo: "Dec/2019 – Dec/2021",
        texto: "From intern to full-time employee, reorganizing the department's logistics flows alongside the company's ERP.",
        stack: ["ERP", "Logistics"]
    }
];

const HABILIDADES_EN = [
    { titulo: "AI & Automation", itens: ["Prompt engineering and LLMs", "AI automations", "n8n workflows", "AI CRMs (Zatten, GoHighLevel)", "Automated follow-ups"] },
    { titulo: "Data & BI", itens: ["SQL", "ETL", "Power BI", "Data modeling and dashboards", "Python for analysis"] },
    { titulo: "Development", itens: ["Python", "TypeScript / JavaScript", "React", "HTML / CSS", "C / C++", "Git", "PostgreSQL", "Virtual machines"] }
];
