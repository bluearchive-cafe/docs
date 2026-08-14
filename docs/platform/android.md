# Android 平台安装文档

## 一、安装说明

### 1. 自动安装

> [!NOTE]
> 此方案需要安装 Android 平台专用安装器，可用于自动下载、安装和更新客户端，并兼具控制面板功能。

> [!WARNING]
> 因签名不同，使用此方案安装前需要先卸载原版客户端，否则会出现安装失败的情况。

> [!TIP]
> 可以使用文件管理器备份 `Android/data/com.YostarJP.BlueArchive/files/` 目录下的 `TableBundles`、`MediaPatch` 和 `AssetBundles` 三个目录，以免卸载重装时需要重新下载游戏资源。

<div align=center>

[![安装器](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++安装器&secondaryLabel=下载&primaryBGColor=%23359e4f&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=android&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://github.com/bluearchive-cafe/Cafe.Launcher.Android/releases)

</div>

### 2. 手动安装

> [!NOTE]
> 此方案需要配合支持 APKS 的安装器进行安装，如 **[SAI](https://github.com/Aefyr/SAI)** 或 **[MT 管理器](https://mt2.cn)** 等，且不支持自动更新客户端。

> [!WARNING]
> 因签名不同，使用此方案安装前需要先卸载原版客户端，否则会出现安装失败的情况。

> [!TIP]
> 可以使用文件管理器备份 `Android/data/com.YostarJP.BlueArchive/files/` 目录下的 `TableBundles`、`MediaPatch` 和 `AssetBundles` 三个目录，以免卸载重装时需要重新下载游戏资源。

<div align=center>

[![安装包](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++安装包&secondaryLabel=下载&primaryBGColor=%23359e4f&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=android&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://download.bluearchive.cafe/android/latest)

</div>

### 3. 替换资源

> [!NOTE]
> 此方案可以配合官方原版客户端使用，无需卸载和安装客户端，但仅支持 `文本汉化` 功能，且游戏内字体显示异常。

> [!WARNING]
> 此方案不支持 `公告汉化`、`主线中配`、`图像视频`、`控制面板`、`登录加速` 等功能，且不会自动更新文本，建议仅在应急情况下使用。

> [!TIP]
> 下载最新版 `TableBundles.zip` 并解压至 `Android/data/com.YostarJP.BlueArchive/files/TableBundles/` 目录下即可。
> 
> **[Kuyo 加速器](https://kuyo.cc)** 已同步本项目的汉化文本，汉化效果与此方案相同，如有需要可前往使用。

<div align=center>

[![资源包](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++资源包&secondaryLabel=下载&primaryBGColor=%23359e4f&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=android&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://github.com/bluearchive-cafe/bluearchive-cafe/releases)

</div>

## 二、常见问题

### 1. 无法安装客户端

部分品牌可能对安装 APKS 存在一定限制（如 `小米`、`OPPO` 等），如安装失败，请根据设备品牌自行查找相关教程。

### 2. 启动后弹窗提示 Use of unauthorized apps 并闪退

设备存在 Root 环境、启用了模块、安装了可疑应用，或合并/重签了安装包。请尝试卸载应用、恢复环境或启用/禁用客户端获取应用列表权限。
