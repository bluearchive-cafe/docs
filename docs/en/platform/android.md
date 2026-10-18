# Android Installation <span id="android-平台安装文档"></span> {#android-installation}

## Installation <span id="一、安装说明"></span> {#installation}

### Manual installation <span id="_1-手动安装"></span> {#manual-installation}

Download the [Android client package](https://download.bluearchive.cafe/android/latest) and install it. After client updates, download the new package and install it over the localized client manually.

> [!WARNING]
> Uninstall the original client first. Its signing certificate differs from the localized package, so installing directly over it will fail.

Before uninstalling, you can use a file manager to back up `TableBundles`, `MediaPatch`, and `AssetBundles` under `Android/data/com.YostarJP.BlueArchive/files/` to avoid downloading the resources again.

### Fallback method <span id="_2-备用方案"></span> {#fallback-method}

The [resource archive](https://github.com/bluearchive-cafe/bluearchive-cafe/releases) works with the original official client without reinstalling it. Download the latest `TableBundles.zip` and extract it into `Android/data/com.YostarJP.BlueArchive/files/TableBundles/`.

> [!WARNING]
> This method provides translated text only, with incorrect font rendering. It does not support translated notices, Chinese story voices, localized images and videos, the control panel, or login acceleration. Text does not update automatically. Use it only as a temporary fallback.

[Kuyo](https://kuyo.cc) also includes this project's translated text and provides the same localization result as this fallback method.

## FAQ <span id="二、常见问题"></span> {#faq}

### The client cannot be installed <span id="_1-无法安装客户端"></span> {#the-client-cannot-be-installed}

Uninstall the original client before installing the localized one because their signing certificates differ.

### “Use of unauthorized apps” appears and the game closes <span id="_2-启动后弹窗提示-use-of-unauthorized-apps-并闪退"></span> {#use-of-unauthorized-apps-appears-and-the-game-closes}

Possible causes include root access, enabled modules, suspicious installed apps, or a re-signed package. Try removing the relevant apps, restoring the device environment, or changing whether the client is allowed to access the installed-app list.
