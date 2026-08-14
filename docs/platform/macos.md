# macOS 平台安装文档

## 一、安装

### 1. PlayCover 安装

> [!NOTE]
> 此方案需要安装 **[PlayCover](https://playcover.io)**，然后添加应用源至 PlayCover，支持自动下载、安装和更新客户端。

> [!WARNING]
> 应用包支持 PlayCover 正式版 和 修改版，不支持 PlayCover 测试版。修改版在测试版的基础上修复了闪退问题，如需使用测试版功能请使用修改版代替。

> [!TIP]
> 可以在修改版 PlayCover 的磁盘映像中添加应用源并查看使用说明，或点击 [这里](https://bluearchive.cafe/playcover) 添加应用源。

<div align=center>

[![修改版](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++修改版&secondaryLabel=下载&primaryBGColor=%230e5cab&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=xcode&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://download.bluearchive.cafe/playcover/latest)

</div>

### 2. 手动安装

> [!NOTE]
> 此方案需要配合 **[PlayCover](https://playcover.io)** 或 **[Impactor](https://impactor.claration.dev)** 等工具进行安装，且不支持自动更新客户端。

> [!WARNING]
> 因自签限制，如果使用基于自签的工具（如 Impactor）进行安装，需要每七天进行续签。

> [!TIP]
> 建议优先尝试使用 PlayCover 安装以避免续签。

<div align=center>

[![应用包](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++应用包&secondaryLabel=下载&primaryBGColor=%230e5cab&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=xcode&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://download.bluearchive.cafe/macos/latest)

</div>

### 3. 替换资源

> [!NOTE]
> 此方案可以配合官方原版客户端使用，但仅支持 `文本汉化` 功能，且游戏内字体显示异常。

> [!WARNING]
> 此方案不支持 `公告汉化`、`主线中配`、`图像视频`、`控制面板`、`登录加速` 等功能，且不会自动更新文本，建议仅在应急情况下使用。

> [!TIP]
> 下载最新版 `TableBundles.zip` 并解压至 `~/Library/Containers/ブルアカ/Data/Documents/TableBundles/` 目录下即可。

<div align=center>

[![资源包](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++资源包&secondaryLabel=下载&primaryBGColor=%230e5cab&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=xcode&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://github.com/bluearchive-cafe/bluearchive-cafe/releases)

</div>

## 二、常见问题

### 1. 无法启动 PlayCover

PlayCover 仅支持 **[Apple Silicon (ARM)](https://support.apple.com/116943)** 机型，不支持 **[Intel Chip (x86)](https://support.apple.com/116943)** 机型。后者建议使用 BootCamp 运行 Windows 系统并参考对应文档进行安装。

### 2. 启动后弹窗提示 Use of unauthorized apps 并闪退

使用了 PlayCover Nightly，或修改了应用包。请尝试使用 PlayCover 正式版 或 修改版，并确保安装时应用包没有被修改。
