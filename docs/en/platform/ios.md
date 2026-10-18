# iOS Installation <span id="ios-平台安装文档"></span> {#ios-installation}

## Installation <span id="一、安装"></span> {#installation}

### AltStore <span id="_1-altstore-安装"></span> {#altstore}

Connect your device to a computer, install [AltStore](https://altstore.io), and add the [BlueArchive.Cafe app source](https://bluearchive.cafe/altstore). The source supports downloading, installing, and updating the client.

> [!WARNING]
> With free-account self-signing, refresh the app every seven days. For AltStore refreshes, the device and computer must be on the same local network and AltServer must be running.

Enable AltServer at startup and background refresh in AltStore to help refresh the app automatically.

### SideStore <span id="_2-sidestore-安装"></span> {#sidestore}

Connect your device to a computer for the initial [SideStore](https://sidestore.io) installation, then add the [BlueArchive.Cafe app source](https://bluearchive.cafe/sidestore) to download, install, and update the client.

> [!WARNING]
> With free-account self-signing, refresh the app every seven days. SideStore refreshes do not require a computer, but LocalDevVPN must be running on the device.

You can enable background refresh in SideStore to refresh the app automatically.

### Manual self-signing <span id="_3-自签安装"></span> {#manual-self-signing}

Download the [iOS app package](https://download.bluearchive.cafe/ios/latest) and use a signing tool such as [Impactor](https://impactor.claration.dev) or [i4Tools](https://www.i4.cn). This method does not provide automatic client updates.

> [!WARNING]
> With free-account self-signing, refresh the app every seven days. Connect to the computer, or enable Wi-Fi sync and keep both devices on the same local network.

In Impactor, you can enable launch at startup and automatic refresh when installing the app.

## FAQ <span id="二、常见问题"></span> {#faq}

### How can I avoid refreshing every seven days? <span id="_1-如何避免续签应用"></span> {#how-can-i-avoid-refreshing-every-seven-days}

The seven-day limit applies to free developer accounts. A paid developer account or a separately obtained signing certificate can avoid that specific limit, subject to its own validity period.

### “Use of unauthorized apps” appears and the game closes <span id="_2-启动后弹窗提示-use-of-unauthorized-apps-并闪退"></span> {#use-of-unauthorized-apps-appears-and-the-game-closes}

Possible causes include a jailbroken environment or a modified app package. Try restoring the environment or changing signing tools, and ensure the signing process does not modify the app package.
