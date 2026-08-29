# 常见问题

## 启动器提示"游戏正在运行"

关闭游戏后再操作。如果游戏已关闭但仍提示，打开任务管理器查看 `BlueArchive.exe` 或 `xldr_BlueArchiveOnline_JP_loader_x64.exe` 进程是否残留。

## 下载速度慢

1. 检查下载速度限制是否开启（设置 → 下载与网络）
2. 尝试切换 CDN 线路（官方 ↔ Cafe）
3. 如果使用代理，检查代理设置是否正确

## 启动游戏后提示文件损坏

1. 点击**修复**按钮让启动器校验并重下损坏文件
2. 如果修复失败，尝试切换启动检查模式为"远程清单"（设置 → 游戏）
3. 如果仍无法解决，删除游戏目录后重新安装

## 设置页面改动未保存

设置页面采用事务式保存：修改 → 点击保存 → 生效。点击取消或直接关闭设置页面会丢弃所有未保存的改动。

打开设置后未操作时“保存”不会处于已修改状态。主界面“更改路径”和“选择已安装游戏”属于即时操作，会立即规范化、保存并刷新主界面状态。

## 如何导出日志

1. 打开设置 → 高级
2. 点击相关按钮导出日志 ZIP 包
3. 将日志文件提交给开发者进行排查

日志查看器首次加载最新 500 条记录；点击“加载更早记录”可继续向前读取 500 条。搜索只作用于已加载记录。导出包包含当前及轮转的统一日志与 `system-info.json`。

## 启动器自身更新

启动器默认在初始化完成后后台检查所选更新频道，可在“设置 → 常规”关闭。检测到新版本时会显示通知；也可在“设置 → 关于”手动检查。更新对话框会列出该版本的 Release 文件；请选择与当前平台匹配的文件，再通过浏览器下载并手动安装。

更新查询优先使用 Cafe 服务；该路径出现 HTTP 错误时会回退 GitHub Releases API。启动时检查失败只会写入诊断日志，不会阻止启动器继续使用；手动检查失败会通过 Toast 显示具体错误原因。

## 官方线路与 Cafe 线路有什么区别？

启动器提供两条游戏文件下载线路（设置 → 下载与网络 → CDN 线路）：

| 线路 | 服务器位置 | 适用场景 |
|------|-----------|----------|
| 官方 | Yo-star 官方 CDN | 直连速度良好、希望使用官方原始资源时使用 |
| Cafe | 社区维护的镜像 CDN | 官方线路缓慢或不可用时作为替代 |

中文系统界面首次默认选择 Cafe，其他语言环境默认选择官方。两条线路可随时切换；切换后，如果已存在可启动的游戏，启动器会提示执行修复，使本地文件与新线路保持一致。Cafe 线路的游戏文件额外集成汉化与资源切换功能。

## 项目是否开源？

是。Cafe Launcher 源代码已在 [bluearchive-cafe/Cafe.Launcher.Avalonia](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia) 公开，并采用 MIT License。

[Cafe.Launcher.Avalonia_Release](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases) 仅用于分发 Release 文件；开发进度和问题反馈统一在源码仓库维护。

## 获取帮助

- **GitHub Issues**：[提交问题反馈](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues)
- **邮件反馈**：<feedback@bluearchive.cafe>
- **官方网站**：[bluearchive.cafe](https://bluearchive.cafe/)
- **日志提交**：遇到 Bug 时请导出并附带日志文件（设置 → 高级 → 导出日志）
