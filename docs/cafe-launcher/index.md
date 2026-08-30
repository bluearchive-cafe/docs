# Cafe Launcher

Cafe Launcher 是面向 Blue Archive 日服的第三方桌面启动器，使用 .NET 10 与 Avalonia 构建。它负责安装、更新、修复和启动游戏，并在官方启动器流程之上提供更可靠的下载控制、双 CDN、界面定制和本地诊断。

> [!IMPORTANT]
> Cafe Launcher 是社区维护项目，与 Nexon、Nexon Games、Yostar 及 Blue Archive 官方无隶属或合作关系。启动器不修改游戏进程，也不向游戏注入代码。

## 从这里开始

- 第一次使用：阅读[安装与首次使用](/cafe-launcher/installation)
- 已经安装：查看[设置参考](/cafe-launcher/settings)和[游戏操作](/cafe-launcher/operations)
- 需要迁移或清理：查看[卸载与数据](/cafe-launcher/uninstall)
- 遇到错误：先查阅[常见问题](/cafe-launcher/faq)，再按[反馈指南](/cafe-launcher/feedback)导出日志

## 主要能力

### 游戏管理

- 识别已有游戏目录
- 安装和增量更新游戏文件
- 校验并修复缺失或损坏的文件
- 在启动前按本地清单、远程清单或不检查三种模式验证文件
- 按清单卸载游戏，保留未由启动器管理的文件

### 下载与网络

- 并发下载、断点续传、暂停、继续和停止
- 1、5、10、25、50 MB/s 速度限制或不限速
- 下载完成后的 CRC64 完整性校验
- 官方 CDN 与 Cafe CDN 切换
- 自动、直连和系统代理三种网络模式

### 桌面体验

- 系统、浅色和深色主题
- 默认、系统、壁纸提取和自定义主题色
- 内置、远程或自定义背景
- English、简体中文、繁體中文和日本語界面
- 系统托盘、窗口位置记忆和减少动态效果
- 本地日志查看、筛选和 ZIP 导出

## 平台状态

| 平台 | 架构 | 状态 |
| --- | --- | --- |
| Windows | x64 | 正式支持 |
| macOS | Apple Silicon | 实验性 |
| Linux | x64 | 实验性 |

所有发行包都包含所需的 .NET Runtime。macOS 和 Linux 尚未完成与 Windows 同等程度的适配和测试；Linux 下启动 Windows 游戏客户端还依赖兼容层，反作弊兼容性未经验证。

## 项目链接

- [下载 Cafe Launcher](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases)
- [源码与 Issues](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)
- [隐私与免责声明](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/PRIVACY.md)
- [第三方许可](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/THIRD-PARTY-NOTICES.md)
