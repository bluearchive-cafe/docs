# 卸载与数据 <span id="uninstall-and-data"></span> {#卸载与数据}

程序、用户数据与游戏目录分别存放。先确定要删除哪一部分，再执行对应步骤。

## 卸载启动器 <span id="uninstall-the-launcher"></span> {#卸载启动器}

删除程序保留独立的游戏目录；用户数据按下列安装方式处理。

### Windows 安装版 <span id="windows-installer"></span> {#windows-安装版}

从 Windows 设置的“应用”或开始菜单卸载。交互式卸载可选删除当前用户数据，默认关闭；静默卸载保留用户数据。

### Windows 便携版 <span id="windows-portable-build"></span> {#windows-便携版}

退出后删除完整解压目录。便携版没有独立注册表配置，设置和日志仍留在系统用户数据目录。

### macOS 与 Linux <span id="macos-and-linux"></span> {#macos-与-linux}

删除应用包、AppImage 或解压目录；DEB、RPM 与 Arch 包通过对应包管理器卸载。游戏和用户数据不会随程序包自动删除。

## 用户数据目录 <span id="user-data-directory"></span> {#用户数据目录}

| 平台 | 默认位置 |
| --- | --- |
| Windows | `%LOCALAPPDATA%\Cafe Launcher` |
| macOS | `~/Library/Application Support/Cafe Launcher` |
| Linux | `$XDG_DATA_HOME/cafe-launcher`，未设置有效绝对路径时为 `~/.local/share/cafe-launcher` |

通过“设置 → 高级 → 打开数据目录”确认实际位置。设置、日志、缓存、恢复记录和受管兼容环境共用该目录。

Linux 升级尝试迁移同一数据主目录中旧 Cafe Launcher 的内容；有同名目标或迁移失败时保留旧文件。清理旧目录前先核对内容。

## 数据文件 <span id="data-files"></span> {#数据文件}

| 文件或目录 | 用途 | 可否删除 |
| --- | --- | --- |
| `settings.json` | 语言、主题、网络、路径等设置 | 可以；下次启动恢复默认设置 |
| `download_state.json` | 可恢复的下载任务状态 | 可以；会失去断点进度 |
| `unified.log`、`unified_*.log` | 当前与轮转诊断日志 | 可以；会失去排障记录 |
| `shown_notices.json` | 已显示公告记录 | 可以；部分公告可能再次显示 |
| `image-cache/` | 远程背景、横幅及更新说明等图片缓存 | 可以；需要时重新下载 |
| `CrashReports/` | 本地崩溃快照 | 可以；会失去崩溃诊断记录 |
| `update/` | 启动器更新包与校验文件暂存 | 未在更新时可以；之后需重新下载 |
| `compatibility/` | 启动器受管的 Wine / Proton Prefix | 删除会失去其中的游戏登录状态与兼容环境数据；建议使用游戏卸载中的可选清理 |
| `runner_output.log`、`compatibility_environment.json`、`prefix_metadata.json` | 最近一次兼容运行器输出、环境预检与 Prefix 元数据 | 可以；会失去对应诊断记录 |
| `log-exports/` | 已导出的日志 ZIP | 可以 |

> [!WARNING]
> 删除用户数据前请先退出 Cafe Launcher。若仍需反馈问题，请先保留或导出日志。

## 游戏目录 <span id="game-directory"></span> {#游戏目录}

通常为所选基础目录下的 YostarGames/BlueArchive_JP。manifest.json 记录清单，game-launcher-config.json 记录版本和启动入口，其余为游戏与资源文件。与官方启动器共享时避免同时操作，下载、修复或卸载期间不要移动目录。

## 卸载游戏 <span id="uninstall-the-game"></span> {#卸载游戏}

关闭游戏，从“设置 → 游戏”或游戏操作菜单进入卸载，核对路径、大小和附加选项。

> [!WARNING]
> 默认删除整个游戏目录，包括游戏自行下载的资源与用户放入的文件，同时清理安装状态、恢复记录与桌面快捷方式。先备份需要保留的内容。

受管 Wine / Proton 环境默认保留，勾选附加项才清理对应子树。自定义 Prefix 位于游戏目录与所选受管子树之外时保留。面板显示扫描、删除进度和结果，列出无法删除的项目；完成前保持启动器运行。

## 彻底清理 <span id="remove-everything"></span> {#彻底清理}

1. 在启动器内卸载游戏，决定是否清理受管兼容环境。
2. 卸载或删除启动器程序。
3. 退出相关进程后，核对并删除用户数据目录。
4. 按需另行删除导出的 ZIP、外部自定义 Prefix 或背景原文件。

删除用户数据也移除其中的受管兼容环境与登录状态。删除本地 UID 不等于删除资源面板服务端配置，请按[隐私政策](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/PRIVACY.md)联系维护者。
