# 花园贪吃蛇

<!-- repo-languages:start -->
[English](README.md) | 简体中文
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

经典贪吃蛇的精致浏览器版本，支持键盘和触控操作、三种速度、暂停继续，以及保存在本地的最高分。

[开始游戏](https://shenzhepei.github.io/game-snake/)

![花园贪吃蛇的游戏棋盘、得分与触控按钮](docs/preview.jpg)

## 功能

- 稳定可测试的经典规则，包含撞墙和碰撞自身判定
- 悠闲、经典和极速三种速度
- 方向键、WASD 与触控操作
- 完整的暂停、继续、重开与结束状态
- 最高分保存在当前浏览器
- 完整适配桌面和移动端的中英文界面

## 本地开发

需要 Node.js 24 和 pnpm 10.33.2。

    corepack enable
    pnpm install
    pnpm dev

运行生产构建与测试：

    pnpm build
    pnpm test:coverage

## 许可证

MIT。原项目 2020 年的版权声明保留在 [LICENSE](LICENSE) 中。
