# 蔚蓝咖啡厅文档站

[docs.bluearchive.cafe](https://docs.bluearchive.cafe/) 的源码，使用 VitePress 构建。面向使用者维护汉化客户端与 Cafe Launcher 的安装、设置、操作和排障；启动器工程规则与实现依据由[启动器源码仓库](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)维护。

## 本地运行

需要 Node.js 22.12 或更新版本，部署工作流使用 Node.js 22。

~~~powershell
npm ci
npm run docs:dev
~~~

按终端地址预览。提交前运行生产构建，检查中英文页面、内部链接和手机端菜单：

~~~powershell
npm run docs:build
npm run docs:preview
~~~

## 内容与目录

| 位置 | 内容 |
| --- | --- |
| docs/index.md、docs/en/index.md | 中英文站点首页 |
| docs/guide/、docs/en/guide/ | 汉化配置与通用排障 |
| docs/platform/、docs/en/platform/ | 按平台安装汉化客户端 |
| docs/cafe-launcher/、docs/en/cafe-launcher/ | Cafe Launcher 用户指南 |
| docs/assets/ | 两种语言共用的截图和其他素材 |
| .vitepress/config.mts | 站点语言、构建与搜索配置 |
| .vitepress/locales/ | 中英文导航、侧边栏和主题文案 |

Cafe Launcher 文档按任务拆分：首页 → 安装 → 设置 → 游戏操作 → 资源面板 → 卸载与数据 → 常见问题 → 反馈。旧 user-guide.md 继续作为索引，保留既有入口。

## 编写与翻译

先写清“在哪里操作、输入什么、会看到什么结果、失败后怎么办”。设置参考维护完整选项，操作页维护流程，FAQ 通过链接引用；开发内部结构和研究细节留在源码仓库。

中英文采用相同相对路径，英文增加 /en/ 前缀。修改时同步对应页面和旧入口，保持相同信息范围。使用本语言站内绝对路径，例如 /cafe-launcher/settings 与 /en/cafe-launcher/settings。

标题保留显式锚点，并用内联 span ID 保留另一语言对应锚点；改标题时同步维护两类 ID，使语言切换和旧入链继续可用。新增页面或调整导航时同步 .vitepress/locales/zh.ts 与 en.ts。

截图使用 docs/assets/ 中的小写英文连字符文件名。中文页通过 ../assets/、英文页通过 ../../assets/ 引用。英文页说明截图显示中文；旧图与当前界面不同则注明，以正文中的入口和分组为准。删除与不可逆操作使用 WARNING 或 IMPORTANT 提示块。

## 核对启动器行为

修改文字前对照代码和发布配置，区分当前行为、实验性能力与历史验证。

| 要确认的内容 | 依据 |
| --- | --- |
| 分组、按钮与条件显示 | [Views](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/tree/main/src/Cafe.Launcher.UI/Views)、[Settings 功能](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/tree/main/src/Cafe.Launcher.UI/Features/Settings) |
| 默认值、音量与运行环境 | [LauncherSettings](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/src/Cafe.Launcher.Core/Models/LauncherSettings.cs)、[GameRuntimeSettings](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/src/Cafe.Launcher.Core/Models/GameRuntimeSettings.cs) |
| 安装、停止、卸载与退出 | [领域契约](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/CONTEXT.md)、[GameOperations](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/tree/main/src/Cafe.Launcher.UI/Features/GameOperations) |
| 数据根与旧目录迁移 | [LauncherDataRoot](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/src/Cafe.Launcher.Core/Services/LauncherDataRoot.cs)、[迁移实现](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/src/Cafe.Launcher.Core/Services/LauncherDataRootMigration.cs) |
| 发行包与平台 | [发布工作流](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/.github/workflows/release.yml) |
| 术语与译名 | [统一术语表](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/UBIQUITOUS_LANGUAGE.md) |
| 信息处理与诊断内容 | [隐私政策](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/PRIVACY.md) |

下载入口与应用内更新检查使用源码仓库 Releases；发行工作流也向发行仓库镜像安装包。历史实机测试只说明当时组合，不作为其他环境或后续版本的兼容保证。

## 验证与发布

运行 npm ci 和 npm run docs:build，修复构建发现的链接错误；另外检查章节锚点、同页语言切换、本语言搜索结果和移动端菜单。生产构建不代表所有锚点都已核验，重命名标题时须检查入链。

推送到 main 或 master 后，GitHub Actions 执行构建并部署 GitHub Pages。具体 Node 版本、分支和权限以 .github/workflows/ 中的部署配置为准；本地修改不会自动发布。

- [线上文档](https://docs.bluearchive.cafe/)
- [Cafe Launcher 源码](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)
- [Cafe Launcher 下载](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/releases)

本仓库源码基于 [MIT License](LICENSE) 发布。
