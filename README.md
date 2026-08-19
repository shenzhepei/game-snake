# Garden Snake

<!-- repo-languages:start -->
English | [简体中文](README-zh-CN.md)
<!-- repo-languages:end -->

<!-- repo-badges:start -->
[![Node.js 24](https://img.shields.io/badge/Node.js-24-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![pnpm 10.33.2](https://img.shields.io/badge/pnpm-10.33.2-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![React 18.3.1](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite 8.2.1](https://img.shields.io/badge/Vite-8.2.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript 5.9.3](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Sass 1.102.0](https://img.shields.io/badge/Sass-1.102.0-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com)
[![Test Coverage](https://img.shields.io/codecov/c/github/shenzhepei/game-snake?style=flat-square&logo=codecov)](https://codecov.io/gh/shenzhepei/game-snake)
[![License](https://img.shields.io/github/license/shenzhepei/game-snake?style=flat-square)](https://github.com/shenzhepei/game-snake/blob/HEAD/LICENSE)
[![Sponsor](https://img.shields.io/github/sponsors/shenzhepei?style=flat-square&logo=githubsponsors&label=Sponsor)](https://github.com/sponsors/shenzhepei)
<!-- repo-badges:end -->

A polished browser edition of the classic Snake game. It supports keyboard and touch controls, three speed modes, pause and resume, and a locally stored high score.

[Play Garden Snake](https://shenzhepei.github.io/game-snake/)

![Garden Snake game board with score and touch controls](docs/preview.jpg)

## Features

- Deterministic classic Snake rules with wall and self collision
- Calm, classic, and rapid speed modes
- Arrow-key, WASD, and touch controls
- Pause, resume, restart, and game-over states
- High scores stored locally in the browser
- Responsive English and Simplified Chinese interface

## Development

Requires Node.js 24 and pnpm 10.33.2.

    corepack enable
    pnpm install
    pnpm dev

Run production and test checks with:

    pnpm build
    pnpm test:coverage

## License

MIT. The original 2020 copyright notice is preserved in [LICENSE](LICENSE).
