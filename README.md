# NEXUS UNIVERSE

Projeto front-end estático com galeria, modais e sistema de batalha.

## Estrutura Atual

- `index.html`: página principal.
- `assets/images`: imagens dos personagens e banners.
- `assets/animations`: frames de animação para batalhas.
- `assets/videos`: vídeos usados nos modais.
- `src/css`: estilos da aplicação.
- `src/js`: scripts da aplicação.
- `src/data/characters-data.js`: base de dados dos personagens.
- `docs/PROJECT-STRUCTURE.md`: documentação da organização.

## Convenções

- Nomes de arquivos em `kebab-case`.
- Separação clara por domínio: `assets/` para mídia e `src/` para código.
- Dados centralizados em `src/data`.

## Scripts Node.js

- `npm run start`: sobe servidor local em `http://127.0.0.1:3000` e abre o `index.html`.
- `npm run dev`: mesmo comportamento do start.
- `npm run format`: formata o projeto com Prettier.
- `npm run format:check`: valida formatacao sem alterar arquivos.

No PowerShell, se der erro de policy com `npm`, use `npm.cmd`:

- `npm.cmd run dev`
