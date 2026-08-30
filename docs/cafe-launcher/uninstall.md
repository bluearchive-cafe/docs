# 卸载与数据

## 卸载启动器

### Windows 安装版

从“Windows 设置 → 应用”找到 Cafe Launcher 并卸载，也可以使用开始菜单中的卸载入口。

交互式卸载时可以选择是否删除当前用户的 Cafe Launcher 数据；该选项默认关闭。静默卸载始终保留用户数据。安装器不会删除游戏目录。

### Windows 便携版

退出 Cafe Launcher 后删除解压目录即可。便携版没有独立注册表配置，但用户设置与日志仍保存在系统的本地应用数据目录。

### macOS 与 Linux

删除应用包、AppImage 或解压目录；使用 `.deb` 安装时通过系统包管理器卸载。用户数据与游戏目录不会自动删除。

## 用户数据目录

Cafe Launcher 使用系统的“本地应用数据”位置，并在其中创建 `Cafe Launcher` 目录。常见位置为：

| 平台 | 常见位置 |
| --- | --- |
| Windows | `%LOCALAPPDATA%\Cafe Launcher` |
| macOS | `~/Library/Application Support/Cafe Launcher` |
| Linux | `~/.local/share/Cafe Launcher` |

具体路径以“设置 → 高级 → 打开数据目录”显示的位置为准。

## 数据文件

| 文件或目录 | 用途 | 可否删除 |
| --- | --- | --- |
| `settings.json` | 语言、主题、网络、路径等设置 | 可以；下次启动恢复默认设置 |
| `download_state.json` | 可恢复的下载任务状态 | 可以；会失去断点进度 |
| `session.active` | 异常退出检测标记 | 正常退出时自动移除 |
| `unified.log`、`unified_*.log` | 当前与轮转诊断日志 | 可以；会失去排障记录 |
| `shown_notices.json` | 已显示公告记录 | 可以；部分公告可能再次显示 |
| `clickCode` | 安装来源标识 | 可以 |
| `log-exports/` | 已导出的日志 ZIP | 可以 |

> [!WARNING]
> 删除用户数据前请先退出 Cafe Launcher。若仍需反馈问题，请先保留或导出日志。

## 游戏目录

游戏通常位于所选基础目录下的 `YostarGames/BlueArchive_JP`。其中：

- `manifest.json` 记录文件清单。
- `game-launcher-config.json` 记录游戏版本和启动入口。
- 其余内容是游戏本体及资源文件。

Cafe Launcher 与官方启动器可以使用同一目录，但不要同时运行两个启动器，也不要在下载或修复过程中手动移动文件。

## 彻底清理

若希望同时移除启动器、用户数据和游戏：

1. 先在 Cafe Launcher 的“设置 → 游戏”中卸载游戏，或手动确认并删除游戏目录。
2. 卸载或删除启动器。
3. 删除用户数据目录。

这三个位置彼此独立。执行前请再次确认路径，避免误删同一父目录中的其他文件。
