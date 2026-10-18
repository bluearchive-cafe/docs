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
├── en/               # 英文文档，与中文页面保持相同的相对路径
└── assets/           # 文档截图等静态资源

.vitepress/config.mts # 导航、侧边栏、搜索与主题配置
.vitepress/locales/   # 中文与英文主题文案、导航和侧边栏
```

## 编写约定

- 面向用户说明“要做什么、在哪里操作、预期看到什么”，避免复制内部实现细节。
- 涉及版本、文件名、默认值或平台支持时，以当前代码和 Release 流程为准。
- 中文保留根路径，英文使用 `/en/` 前缀；导航栏语言菜单会切换到同一页面的另一语言版本。
- 新增或修改用户文档时，同步维护 `docs/` 和 `docs/en/` 下对应的中英文页面，包括旧入口 `user-guide.md`。
- 使用对应语言的站内绝对路径链接，例如 `/cafe-launcher/installation` 和 `/en/cafe-launcher/installation`；英文页中的锚点必须对应英文标题。
- 标题使用显式锚点，并在内联 `<span id="…"></span>` 中保留另一语言的对应锚点。重命名标题或新增章节时同步维护这两个 ID，使带章节位置的语言切换和既有链接继续可用。
- 危险操作使用 VitePress 的 `WARNING` 或 `IMPORTANT` 提示块。
- 截图放入 `docs/assets/`，文件名使用小写英文和连字符。
- 截图由两种语言共用；英文页面使用 `../../assets/` 引用现有截图，并说明截图显示的是中文界面。
- 修改导航或新增页面时，同步更新 `.vitepress/locales/zh.ts` 与 `.vitepress/locales/en.ts`；站点语言和搜索配置位于 `.vitepress/config.mts`。
- 提交前执行 `npm run docs:build`，检查中英文页面、同页语言切换、本语言搜索结果和手机端菜单。
- 不在多个页面维护同一份易变数据；下载文件以 Releases 为准，开发细节以源码仓库为准。

## 发布

推送到 `main` 或 `master` 后，GitHub Actions 会安装依赖、执行 `npm run docs:build`，并部署到 GitHub Pages。

- [线上文档](https://docs.bluearchive.cafe/)
- [Cafe Launcher 源码](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)
- [Cafe Launcher 下载](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases)

## 许可

本仓库基于 [MIT License](./LICENSE) 发布。
