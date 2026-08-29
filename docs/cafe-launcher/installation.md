# 安装与首次使用

## 系统要求

| 项目 | 最低要求 |
|------|----------|
| 操作系统 | Windows 10 1809+ / Windows 11 |
| 架构 | x64（64 位） |
| 内存 | 4 GB |
| 磁盘空间 | 启动器占用以当前 Release 资产为准；游戏所需空间以向导和设置页检测结果为准 |
| 网络 | 宽带连接 |
| 运行库 | 无需额外安装（自包含发布） |

以上为正式支持的 Windows 环境。macOS Apple Silicon 与 Linux x64 自 `v1.1.0-beta.1` 起提供实验性构建，尚未完成针对性适配与充分测试；可用性请以具体 Release 说明为准。

## 下载

从 [GitHub Releases](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases) 获取最新版本，并选择与系统匹配的文件：

| 格式 | 文件名 | 说明 |
|------|--------|------|
| Windows 安装版（推荐） | `Cafe.Launcher.Avalonia_v*_setup.exe` | 带安装向导，自动创建快捷方式和卸载入口 |
| Windows 自包含 ZIP | `Cafe.Launcher.Avalonia_v*_win-x64.zip` | 解压即用，不写入注册表 |
| macOS Apple Silicon | `Cafe.Launcher.Avalonia_v*_osx-arm64.zip` | 内含 `Cafe Launcher.app`；实验性构建 |
| Linux x64 | `Cafe.Launcher.Avalonia_v*_linux-x64.AppImage` 或 `*_linux-x64.tar.gz` | 实验性构建 |

旧版本可能使用 `_standalone.zip` 文件名，具体以所选 Release 的资产列表为准。下文安装、界面和数据路径说明以 Windows 版本为准。

## 安装版步骤

1. 下载 `setup.exe` 文件
2. 双击运行，如出现 UAC 提示请选择"是"
3. 选择安装语言（English / 简体中文 / 日本語）
4. 确认或修改安装路径（默认 `C:\Program Files\Cafe Launcher`）
5. （可选）勾选"创建桌面快捷方式"
6. 点击安装，等待完成

![安装向导欢迎页](../assets/screenshots/installer-welcome.png)

安装版按“所有用户”范围安装，安装、升级和卸载都需要管理员权限。升级前请先退出 Cafe Launcher；新版安装器会先移除旧版中由安装器管理的文件，再写入当前版本，不会删除安装目录中的其他自有文件。

## 便携版步骤

1. 下载 `win-x64.zip`（旧版本为 `standalone.zip`）
2. 解压到任意目录
3. 双击 `Cafe.Launcher.Avalonia.exe` 运行

## 界面概览

启动后你会看到主窗口，分为几个区域：

![主窗口概览](../assets/screenshots/main-window.png)

1. **标题栏** — 产品名、版本号，最小化和关闭按钮
2. **远程内容区**（左侧） — 公告、Banner、社交链接
3. **背景墙纸** — 可自定义的壁纸背景
4. **底部控制栏** — 游戏安装/启动按钮、进度显示
5. **状态信息** — 游戏路径、运行状态

## 首次启动向导

首次启动会显示固定的五步设置向导：

1. 选择启动器界面语言。
2. 选择官方资源或 Cafe 下载源。
3. 确认规范化后的游戏安装路径。
4. 选择自动、直连或系统代理。
5. 复核全部设置；可点击任一“修改”返回已完成步骤。

左侧导航只允许返回当前或已完成步骤。按 `Esc` 或点击跳过时会先显示退出确认，确认后才应用默认设置。

中文系统界面首次默认选择 Cafe 下载源，其他语言环境默认选择官方源；可在向导或后续的“下载与网络”设置中切换。预发布版本默认跟踪测试版更新频道，稳定版本默认跟踪稳定版。

## 首次安装游戏

1. 启动器会自动检测游戏是否已安装
2. 如未安装，底部会显示**安装**按钮
3. 点击安装，选择或确认游戏安装路径；主界面显示、持久化设置和安装工作流始终使用同一个规范化路径
4. 启动器开始下载游戏文件，支持断点续传和暂停/恢复

![游戏下载进度](../assets/screenshots/download-progress.png)

5. 下载完成后自动校验文件完整性
6. 校验通过后，按钮变为**启动游戏**

> **提示**：如果之前安装过官方启动器的游戏文件，将游戏路径指向同一目录即可复用已有文件，无需重新下载。
