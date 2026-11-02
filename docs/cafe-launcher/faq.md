# 常见问题 <span id="frequently-asked-questions"></span> {#常见问题}

先按现象查找下面的处理方法。仍未解决时，保留错误原文和发生时间，再按[反馈指南](/cafe-launcher/feedback)导出日志。

## 应该下载哪个文件？ <span id="which-package-should-i-download"></span> {#应该下载哪个文件}

Windows 通常选安装程序，需要便携运行时选 win-x64.zip。Apple Silicon 选 osx-arm64.zip，Linux 按发行版选包。完整文件名与平台限制见[安装指南](/cafe-launcher/installation#_2-下载正确的文件)。

## 可以复用官方启动器下载的游戏吗？ <span id="can-i-reuse-files-downloaded-by-the-official-launcher"></span> {#可以复用官方启动器下载的游戏吗}

可以。在首次向导或“设置 → 游戏”选择现有 BlueArchive_JP 目录。启动器读取 manifest.json 和 game-launcher-config.json。避免两个启动器同时下载、修复或修改同一目录。

## 下载速度很慢 <span id="downloads-are-slow"></span> {#下载速度很慢}

按顺序检查：限速是否为无限制 → 代理是否适合当前网络 → 所在磁盘空间和写入速度 → 暂停后继续。还可切换下载源重试；已有游戏切源后应修复以匹配新资源。

重启可以恢复符合条件的断点任务，主动点“停止”会放弃恢复记录。

## 下载失败、校验失败或反复重试 <span id="downloads-fail-verification-fails-or-retries-keep-repeating"></span> {#下载失败、校验失败或反复重试}

先关闭游戏，确认目标目录可写、空间充足，检查安全软件是否阻止 .tmp 或游戏文件写入。必要时切换下载源再修复。

仍失败时记录文件名和错误原文，提高日志级别、保存、复现并导出。操作进行时不要手动删除未知临时文件；先让启动器停止并完成收尾。

## 启动器提示“游戏正在运行” <span id="the-launcher-says-the-game-is-running"></span> {#启动器提示-游戏正在运行}

关闭游戏后重试。窗口消失但进程残留时，在任务管理器核对 BlueArchive.exe 或 xldr_BlueArchiveOnline_JP_loader_x64.exe。

Linux 会识别启动器拥有的游戏及映射到安装目录的外部进程。扫描超时或无法确认时也会拒绝写入，请先确认游戏结束；持续误报时导出日志。

## 启动时提示文件缺失或大小不一致 <span id="launch-verification-reports-missing-files-or-size-mismatches"></span> {#启动时提示文件缺失或大小不一致}

在“设置 → 游戏”执行修复。改为远程文件清单只更换校验依据，不修复文件；“无”可临时排查校验流程，不能证明内容完整。

## 官方下载源与 Cafe 下载源有什么区别？ <span id="how-do-official-and-cafe-sources-differ"></span> {#官方下载源与-cafe-下载源有什么区别}

官方下载源提供 Yostar 原始日服资源；Cafe 下载源由蔚蓝咖啡厅日服汉化组提供汉化资源，并支持资源面板。中文系统默认 Cafe，其他语言默认官方，之后可在设置中切换。

切换后按新清单修复。资源面板的开关另按汉化 UID 保存，见[资源面板](/cafe-launcher/resource-panel)。

## 修改设置后没有生效 <span id="settings-changes-did-not-take-effect"></span> {#修改设置后没有生效}

先确认已点击“保存”。外观的即时预览不等于持久化，放弃会恢复。主窗口路径操作立即保存，设置页路径则需保存；网络请求与手动更新检查使用已保存偏好。

## 找不到动态效果或取色算法？ <span id="where-are-motion-and-color-extraction-settings"></span> {#找不到动态效果或取色算法}

动态效果在“设置 → 外观 → 主题与动效”。取色算法、配色变体和中性色在默认折叠的“高级配色”；取色算法仅在主题色选择“从壁纸获取”时出现。见[外观设置](/cafe-launcher/settings#外观)。

## 视频背景不播放或没有声音 <span id="video-background-does-not-play-or-has-no-sound"></span> {#视频背景不播放或没有声音}

1. 确认使用 Windows x64；其他平台使用静态回退。
2. 选择“外观 → 背景 → 自定义”，使用本地 .mp4、.mkv 或 .webm。
3. 恢复可见窗口，检查减少动态效果或系统动画偏好是否暂停了播放。
4. 音量默认 0，调高音量并取消静音；静音期间调整只改变保留音量。
5. 播放失败时核对提示与日志，重新选择可播放文件，并确保完整发行包的视频运行库仍在。

取色来自封面或首帧，不逐帧变化。失败和平台不支持都会回退内置静态背景。

## 启动器如何更新？ <span id="how-does-the-launcher-update-itself"></span> {#启动器如何更新}

默认启动时检查，也可从“设置 → 关于”手动检查，使用已保存的更新通道。

Windows 安装版和便携版可阅读发布说明后下载，按同一版本 SHA256SUMS 校验，再“重启以更新”。缺少摘要、匹配包或更新助手时会说明原因并提供“前往发布页”。macOS 和 Linux 从发布页手动下载、安装。

检查失败不阻止继续使用；测试通道包含预发布，稳定通道只提供稳定版。

## Linux 能直接运行游戏吗？ <span id="can-linux-launch-the-game"></span> {#linux-能直接运行游戏吗}

启动器提供 Linux x64 实验性构建，游戏仍通过另装的 UMU / Proton 或 Wine 运行。历史验证包含 Arch + UMU 1.4.4 + UMU-Proton 10.0-4 + NTFS3 组合；反作弊随环境与游戏版本变化，不能保证其他组合。见[运行环境设置](/cafe-launcher/settings#兼容运行环境-仅-linux)。

## macOS 能启动游戏吗？ <span id="can-the-macos-launcher-launch-the-game"></span> {#macos-能启动游戏吗}

当前不能。Apple Silicon 构建可以安装、更新和修复游戏文件，尚未提供启动 Windows 游戏所需的兼容运行层。

## 如何查看或导出日志？ <span id="how-do-i-view-or-export-logs"></span> {#如何查看或导出日志}

进入“设置 → 高级”。“查看日志”浏览已加载记录，“导出日志”按时间范围创建 ZIP，“打开数据目录”定位原文件。导出包仍在本机，分享前核对路径、UID 等信息。步骤见[导出日志](/cafe-launcher/feedback#导出日志)。

## 如何彻底卸载？ <span id="how-do-i-remove-everything"></span> {#如何彻底卸载}

程序、用户数据和游戏目录分别清理。先核对范围并备份，再按[卸载与数据](/cafe-launcher/uninstall)执行；删除用户数据还会移除其中的受管兼容环境。

## v1.1.0-beta.5 启动器无法启动（启动即崩溃） <span id="v1-1-0-beta-5-crashes-at-startup"></span> {#v1-1-0-beta-5-启动器无法启动-启动即崩溃}

这是历史版本问题：首批 beta.5 缺少 WindowFilePickerService 的具体注册，日志包含 `NoServiceRegistered, Cafe.Launcher.Avalonia.Services.WindowFilePickerService`；受影响构建的 CommitSha 为 `b33915d`。

该问题后来已修复。仍使用该构建时，从 [Releases](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/releases) 下载较新完整发行包覆盖安装。独立的游戏目录与用户设置会保留。其他版本启动失败时，应按当前错误日志排查。

## 仍然无法解决 <span id="i-still-need-help"></span> {#仍然无法解决}

按[反馈指南](/cafe-launcher/feedback)提供版本、环境、复现步骤、预期与实际结果，以及检查过的日志 ZIP，再提交 [Issue](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues)。
