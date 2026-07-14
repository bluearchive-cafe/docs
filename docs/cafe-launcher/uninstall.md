# 卸载启动器

## 安装版

- **交互式卸载**：通过 Windows 设置 → 应用 → 卸载，或开始菜单 → Cafe Launcher → Uninstall Cafe Launcher。可选择是否同时删除用户数据（`%LOCALAPPDATA%\Cafe Launcher`）。
- **静默卸载**：以管理员身份运行 `"C:\Program Files\Cafe Launcher\Uninstall.exe" /S`。静默模式**保留**用户数据。

## 便携版

直接删除启动器文件夹即可，无残留注册表。

如需删除启动器数据文件，请删除 `%LOCALAPPDATA%\Cafe Launcher` 文件夹。

> **注意**：卸载启动器不会删除游戏文件。游戏目录需手动处理。

## 数据文件位置

启动器在以下位置存储数据：

| 内容 | 路径 |
|------|------|
| 设置 | `%LOCALAPPDATA%\Cafe Launcher\settings.json` |
| 日志 | `%LOCALAPPDATA%\Cafe Launcher\unified.log` |
| 下载状态 | `%LOCALAPPDATA%\Cafe Launcher\download_state.json` |
| 已读通知 | `%LOCALAPPDATA%\Cafe Launcher\shown_notices.json` |
| 安装来源 | `%LOCALAPPDATA%\Cafe Launcher\clickCode` |
| 游戏文件 | 设置中指定的游戏路径 |

## 与官方启动器共存

Cafe Launcher 与官方启动器共享游戏目录和清单文件（`manifest.json`、`game-launcher-config.json`）。两者可以交替使用，但请注意：

- 使用同一个游戏路径，避免重复下载
- 文件格式保持兼容，任一方下载/修复的文件另一方可正常识别
- 不要同时运行两个启动器
