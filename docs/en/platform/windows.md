# Windows Installation <span id="windows-平台安装文档"></span> {#windows-installation}

## Installation <span id="一、安装"></span> {#installation}

### Cafe Launcher <span id="_1-cafe-launcher-安装"></span> {#cafe-launcher}

[Cafe Launcher](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release) downloads, installs, and updates the game, and includes a resource control panel.

> [!IMPORTANT]
> Complete the download source, proxy, and installation directory setup before using the game and its localization features. Choose the Cafe source for Chinese localization resources.

See [Installation and First Run](/en/cafe-launcher/installation) and the [Cafe Launcher documentation](/en/cafe-launcher/) for instructions.

### Alternative Windows launcher <span id="_2-启动器安装"></span> {#alternative-windows-launcher}

Download the [Windows launcher archive](https://download.bluearchive.cafe/launcher/latest), extract it, and run the launcher. It automatically downloads, installs, and updates the client. You can replace the official launcher with it or keep it in a separate directory and create a shortcut.

> [!WARNING]
> If the message `VP9コーデックのインストールが必要です` appears, install [VP9 Video Extensions from Microsoft Store](https://apps.microsoft.com/detail/9n4d0msmp0pt).

### Fallback method <span id="_3-备用方案"></span> {#fallback-method}

Download the latest `TableBundles.zip` from the [resource releases](https://github.com/bluearchive-cafe/bluearchive-cafe/releases) and extract it into `Installation directory\BlueArchive_JP\BlueArchive_Data\StreamingAssets\TableBundles\`.

> [!WARNING]
> This works with the original official client but provides translated text only, with incorrect font rendering. Translated notices, Chinese story voices, localized images and videos, the control panel, and login acceleration are unavailable. Text does not update automatically. Use it only as a temporary fallback.

## FAQ <span id="二、常见问题"></span> {#faq}

### Localization and the control panel are missing <span id="_1-启动游戏后没有汉化功能及控制面板"></span> {#localization-and-the-control-panel-are-missing}

In Cafe Launcher, select the **Cafe** download source and repair the game. In the alternative launcher, use **Repair** to check game resource integrity.

### “セキュリティモジュールの初期化に失敗しました” appears, or the game closes <span id="_2-启动游戏后弹窗提示-セキュリティモジュールの初期化に失敗しました-或弹窗闪退"></span> {#セキュリティモジュールの初期化に失敗しました-appears-or-the-game-closes}

The anti-cheat module failed to initialize or detected suspicious behavior. Try restarting the game or closing other suspicious applications and conflicting anti-cheat software.
