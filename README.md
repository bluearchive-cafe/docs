# 蔚蓝咖啡厅文档站

这是 [docs.bluearchive.cafe](https://docs.bluearchive.cafe/) 的源代码仓库，使用 VitePress 构建，集中维护：

- 蔚蓝咖啡厅汉化客户端的安装、配置与常见问题
- Cafe Launcher 的安装、设置、游戏操作、数据管理与反馈指南

## 本地预览

需要 Node.js 22 或更高版本。

```bash
npm ci
npm run docs:dev
```

VitePress 会在终端中显示本地预览地址。提交前请至少运行一次生产构建：

```bash
npm run docs:build
```

如需预览生产构建：

```bash
npm run docs:preview
```

## 目录结构

```text
docs/
├── index.md          # 文档站首页
├── guide/            # 汉化功能配置与通用排障
├── platform/         # Android、iOS、Windows、macOS 安装说明
├── cafe-launcher/    # Cafe Launcher 用户文档
└── assets/           # 文档截图等静态资源

.vitepress/config.mts # 导航、侧边栏、搜索与主题配置
```

## 编写约定

- 面向用户说明“要做什么、在哪里操作、预期看到什么”，避免复制内部实现细节。
- 涉及版本、文件名、默认值或平台支持时，以当前代码和 Release 流程为准。
- 使用站内绝对路径链接，例如 `/cafe-launcher/installation`，不要写仓库内文件路径。
- 危险操作使用 VitePress 的 `WARNING` 或 `IMPORTANT` 提示块。
- 截图放入 `docs/assets/`，文件名使用小写英文和连字符。
- 修改导航或新增页面时，同步更新 `.vitepress/config.mts`。
- 不在多个页面维护同一份易变数据；下载文件以 Releases 为准，开发细节以源码仓库为准。

## 发布

推送到 `main` 或 `master` 后，GitHub Actions 会安装依赖、执行 `npm run docs:build`，并部署到 GitHub Pages。

- [线上文档](https://docs.bluearchive.cafe/)
- [Cafe Launcher 源码](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)
- [Cafe Launcher 下载](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases)

## 许可

本仓库基于 [MIT License](./LICENSE) 发布。
