# Mídia dos projetos

Crie uma pasta por projeto com o mesmo `id` usado em `Assets/js/data.js`:

```
Assets/Projetos/
├── tcc-sentimento/
│   ├── capa.jpg
│   ├── demo.mp4
│   ├── 1.jpg
│   └── 2.jpg
├── automacoes-ia/
├── dashboards-bi/
└── painel-rotas/
```

Depois preencha `capa`, `video` e `fotos` do projeto em `Assets/js/data.js` (o topo do arquivo tem exemplos).

Vídeo em inglês: grave o arquivo (ex.: `demo-en.mp4`) e coloque `video: { tipo: "arquivo", src: "...demo-en.mp4", poster: "...capa.jpg" }`
no mesmo projeto dentro de `Assets/js/data.en.js`. Quem estiver com a página em inglês vê esse vídeo; em português continua o de `data.js`.

- Fotos: `.webp` ou `.jpg`, até ~1600px de largura.
- Vídeos: prefira YouTube (não listado) — o arquivo fica leve. Se usar `.mp4`, mantenha abaixo de ~20 MB (o GitHub recusa arquivos acima de 100 MB).
- Projetos de clientes: borre nomes, telefones e dados pessoais antes de publicar prints ou vídeos.
