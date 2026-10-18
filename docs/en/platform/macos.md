# macOS Installation <span id="macos-平台安装文档"></span> {#macos-installation}

These methods run the iOS localization client on Apple Silicon. The separate Cafe Launcher macOS build does not launch the Windows game.

## Installation <span id="一、安装"></span> {#installation}

### PlayCover <span id="_1-playcover-安装"></span> {#playcover}

Install [PlayCover](https://playcover.io), then add the [BlueArchive.Cafe app source](https://bluearchive.cafe/playcover) to download, install, and update the client.

> [!WARNING]
> The app package supports stable PlayCover and the project's modified build, not PlayCover Nightly. The modified build fixes crashes encountered with the nightly build; use it if you need the corresponding features.

The [modified PlayCover disk image](https://download.bluearchive.cafe/playcover/latest) includes source setup and usage instructions.

### Manual installation <span id="_2-手动安装"></span> {#manual-installation}

Download the [macOS app package](https://download.bluearchive.cafe/macos/latest) and install it using [PlayCover](https://playcover.io) or a tool such as [Impactor](https://impactor.claration.dev). Client updates must be installed manually.

> [!WARNING]
> Tools that rely on free-account self-signing, such as Impactor, require refreshing the app every seven days. Try PlayCover first to avoid that requirement.

### Fallback method <span id="_3-备用方案"></span> {#fallback-method}

Download the latest `TableBundles.zip` from the [resource releases](https://github.com/bluearchive-cafe/bluearchive-cafe/releases) and extract it into `~/Library/Containers/ブルアカ/Data/Documents/TableBundles/`.

> [!WARNING]
> This works with the original client but provides translated text only, with incorrect font rendering. Translated notices, Chinese story voices, localized images and videos, the control panel, and login acceleration are unavailable. Text does not update automatically. Use it only as a temporary fallback.

## FAQ <span id="二、常见问题"></span> {#faq}

### PlayCover does not start <span id="_1-无法启动-playcover"></span> {#playcover-does-not-start}

PlayCover supports [Apple Silicon Macs](https://support.apple.com/116943), not Intel Macs. For an Intel Mac, consider running Windows through Boot Camp and follow the [Windows instructions](/en/platform/windows).

### “Use of unauthorized apps” appears and the game closes <span id="_2-启动后弹窗提示-use-of-unauthorized-apps-并闪退"></span> {#use-of-unauthorized-apps-appears-and-the-game-closes}

Possible causes include PlayCover Nightly or a modified app package. Try stable PlayCover or the project's modified build, and ensure the package is not modified during installation.
