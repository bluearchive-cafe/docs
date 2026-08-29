# Cafe Launcher 问题反馈指南

当您在使用本软件的过程中遇到问题时，您可以向开发者反馈（邮件、GitHub Issue、QQ 私信），或者在 QQ 群向其它用户和开发者求助。

提交反馈前，请确保：

* 您当前使用的程序版本为最新。可在“设置 → 关于 → 检查更新”确认。
* 您应当先在 [帮助文档](https://docs.bluearchive.cafe/cafe-launcher/) 和 [常见问题（FAQ）](https://docs.bluearchive.cafe/cafe-launcher/faq) 中搜索您遇到的问题。许多常见故障可以通过文档方案快速自行解决。

如果您查阅文档后问题仍未解决，请在提交反馈时提供以下核心信息，以便开发者快速定位问题：

* GitHub 问题统一提交到 [Cafe.Launcher.Avalonia Issues](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues)
* 请说明问题的具体表现，并尽可能提供完整的复现步骤
* 适当的截图
* 程序的运行环境，包括操作系统、硬件信息、网络环境等
* 日志文件（导出方法见下）

下面列举出日志导出的一般步骤。

* 打开应用程序；
* 点击**设置**图标，进入**高级**页面；
* 点击**导出日志**按钮；
* 默认导出目录为 `%LOCALAPPDATA%\Cafe Launcher\log-exports`，也可以在目录选择器中改选位置；完成后启动器会打开所选文件夹；
* 请发送生成的 `CafeLauncher_Logs_*.zip`，其中包含统一日志、轮转日志和系统信息。日志可能包含本地路径等环境信息，发送前可先自行检查。
