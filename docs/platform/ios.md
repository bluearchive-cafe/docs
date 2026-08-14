# iOS 平台安装文档

## 一、安装

### 1. AltStore 安装

> [!NOTE]
> 此方案需要先将设备连接至电脑，安装 **[AltStore](https://altstore.io)**，然后添加应用源至 AltStore，支持自动下载、安装和更新客户端。

> [!WARNING]
> 因自签限制，使用此方案需要每七天进行续签。续签时需要确保设备和电脑处于同一局域网内且电脑已启动 AltServer。

> [!TIP]
> 可以在 AltServer 的设置中启用开机自启动，并在 AltStore 的设置中启用后台刷新，以自动续签应用。

<div align=center>

[![应用源](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++应用源&secondaryLabel=下载&primaryBGColor=%232d2d2d&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=apple&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://bluearchive.cafe/altstore)

</div>

### 2. SideStore 安装

> [!NOTE]
> 此方案需要先将设备连接至电脑，安装 **[SideStore](https://sidestore.io)**，然后添加应用源至 SideStore，支持自动下载、安装和更新客户端。

> [!WARNING]
> 因自签限制，使用此方案需要每七天进行续签。续签时无需使用电脑，但需要确保设备已启动 LocalDevVPN。

> [!TIP]
> 可以在 SideStore 的设置中启用后台刷新，以自动续签应用。

<div align=center>

[![应用源](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++应用源&secondaryLabel=下载&primaryBGColor=%232d2d2d&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=apple&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://bluearchive.cafe/sidestore)

</div>

### 3. 自签安装

> [!NOTE]
> 此方案需要配合 **[Impactor](https://impactor.claration.dev)** 或 **[爱思助手](https://www.i4.cn)** 等工具进行自签安装，无需安装额外应用，但不支持自动更新客户端。

> [!WARNING]
> 因自签限制，使用此方案需要每七天进行续签。续签时需要连接电脑，或启用 Wi-Fi 同步，并确保设备和电脑处于同一局域网内。

> [!TIP]
> 可以在 Impactor 的设置中启用开机自启动，并在安装应用时勾选自动刷新，以自动续签应用。

<div align=center>

[![应用包](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=++应用包&secondaryLabel=下载&primaryBGColor=%232d2d2d&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=apple&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://download.bluearchive.cafe/ios/latest)

</div>

# 二、常见问题

### 1. 如何避免续签应用

免费开发者账号有七天的自签限制，使用付费开发者账号或自行购买签名证书进行自签可避免此限制。

### 2. 启动后弹窗提示 Use of unauthorized apps 并闪退

设备存在越狱环境，或修改了应用包。请尝试恢复环境或更换自签工具，并确保自签时应用包不会被修改。
