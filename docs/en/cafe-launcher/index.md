# Cafe Launcher

Cafe Launcher is a third-party desktop launcher for Blue Archive JP, built with .NET 10 and Avalonia. It installs, updates, repairs, and launches the game, adding resumable downloads, two download sources, appearance customization, Chinese localization resource management, and local diagnostics.

> [!IMPORTANT]
> Cafe Launcher is maintained by the community and is not affiliated with Nexon, Nexon Games, Yostar, or the official Blue Archive team. It does not modify the game process or inject code into it.

![Cafe Launcher main window](../../assets/screenshots/main-window.webp)

The screenshots in this guide show the Chinese interface. You can select English in the launcher.

## Start here <span id="从这里开始"></span> {#start-here}

- First time: [Installation and First Run](/en/cafe-launcher/installation)
- Already installed: [Settings Reference](/en/cafe-launcher/settings) and [Game Operations](/en/cafe-launcher/operations)
- Change Chinese localization resources: [Resource Panel](/en/cafe-launcher/resource-panel)
- Move or remove files: [Uninstall and Data](/en/cafe-launcher/uninstall)
- Troubleshoot: check the [FAQ](/en/cafe-launcher/faq), then export logs using the [Feedback Guide](/en/cafe-launcher/feedback)

## Features <span id="主要能力"></span> {#features}

### Game management <span id="游戏管理"></span> {#game-management}

- Detect existing game installations, including files downloaded by the official launcher.
- Install and incrementally update game files.
- Verify and repair missing or corrupt files.
- Choose local-manifest verification, remote-manifest verification, or no verification before launch.
- Uninstall the entire game directory, with an optional cleanup of launcher-managed compatibility environments.

### Downloads and networking <span id="下载与网络"></span> {#downloads-and-networking}

- Concurrent transfers, resume, pause, continue, and stop.
- Unlimited speed or limits of 1, 5, 10, 25, or 50 MB/s.
- CRC64 verification after downloads.
- Official and Cafe download sources.
- Automatic, direct, and system proxy modes.

### Desktop experience <span id="桌面体验"></span> {#desktop-experience}

- System, light, and dark themes.
- Default, system, wallpaper-derived, or custom accent colors.
- Bundled, remote, or custom backgrounds.
- English, Simplified Chinese, Traditional Chinese, and Japanese interfaces.
- System tray, remembered window position, and reduced motion.
- Local log viewing, filtering, and ZIP export.

### Chinese localization resources <span id="汉化资源"></span> {#chinese-localization-resources}

- Manage translated game text, Chinese main story voices, and localized images and videos by UID.
- Read the UID automatically from local game data or enter it manually.
- Toggle each category separately and compare its official and localized resource versions.

See [Resource Panel](/en/cafe-launcher/resource-panel). These resources localize the game into Chinese, independently of the launcher's interface language.

## Platform status <span id="平台状态"></span> {#platform-status}

| Platform | Architecture | Status |
| --- | --- | --- |
| Windows | x64 | Officially supported |
| macOS | Apple Silicon | Experimental; cannot launch the game |
| Linux | x64 | Experimental |

All packages include the .NET Runtime. macOS and Linux have not received the same level of adaptation and testing as Windows.

Linux can launch the Windows game through Wine, UMU, or Proton. The complete chain, including XIGNCODE3, was verified on Arch Linux + UMU 1.4.4 + UMU-Proton 10.0-4 with the game on NTFS3. Other combinations have not been verified and are not guaranteed to work.

The macOS launcher currently only installs, updates, and repairs game files. It does not provide the compatibility layer needed to launch the Windows game, and game launch support is not currently planned.

## Project links <span id="项目链接"></span> {#project-links}

- [Download Cafe Launcher](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases)
- [Source code and Issues](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia)
- [Privacy policy (Chinese)](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/PRIVACY.md)
- [Third-party licenses](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/THIRD-PARTY-NOTICES.md)
