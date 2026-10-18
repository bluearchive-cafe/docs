# Installation and First Run <span id="安装与首次使用"></span> {#installation-and-first-run}

## 1. Check your platform <span id="_1-确认平台"></span> {#_1-check-your-platform}

| Platform | Packages | Support |
| --- | --- | --- |
| Windows 10 1809+ / Windows 11 x64 | Installer, portable ZIP | Officially supported |
| macOS Apple Silicon | `.app` archive | Experimental; cannot launch the game |
| Linux x64 | `.deb`, `.rpm`, AppImage, `.tar.gz` | Experimental |

Packages are self-contained: no separate .NET Runtime installation is needed. The game still requires sufficient disk space and an available network connection.

> [!WARNING]
> macOS and Linux builds are experimental. Linux game launch, including XIGNCODE3, was verified on Arch Linux + UMU 1.4.4 + UMU-Proton 10.0-4 with the game on NTFS3. Other distributions, Proton builds, and graphics drivers have not been verified. The macOS launcher can install, update, and repair files but cannot launch the Windows game; launch support is not currently planned.

## 2. Download the right package <span id="_2-下载正确的文件"></span> {#_2-download-the-right-package}

Open [Cafe Launcher Releases](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia_Release/releases) and select a package from the latest release:

| Filename | Purpose |
| --- | --- |
| `Cafe.Launcher_v*_setup.exe` | Standard Windows installation; recommended for most users |
| `Cafe.Launcher_v*_win-x64.zip` | Portable Windows build |
| `Cafe.Launcher_v*_osx-arm64.zip` | Apple Silicon Mac |
| `Cafe.Launcher_v*_linux-x64.deb` | Debian, Ubuntu, and related distributions |
| `Cafe.Launcher_v*_linux-x64.rpm` | Fedora, openSUSE, and other RPM distributions |
| `Cafe.Launcher_v*_linux-x64.AppImage` | Run on Linux without installation |
| `Cafe.Launcher_v*_linux-x64.tar.gz` | Manual Linux deployment |

Older releases may use the `Cafe.Launcher.Avalonia` prefix. Releases with `beta` in the version are prereleases. Choose the latest release without a prerelease label for everyday use.

## 3. Install the launcher <span id="_3-安装启动器"></span> {#_3-install-the-launcher}

### Windows installer <span id="windows-安装版"></span> {#windows-installer}

1. Run the downloaded `setup.exe`.
2. Choose the installer language: English, Simplified Chinese, or Japanese. This affects only the installer; the launcher language is selected separately on first run.

   ![Installer language selection](../../assets/screenshots/installer-language.webp)

3. Accept the administrator permission prompt.
4. Confirm the destination, which defaults to `C:\Program Files\Cafe Launcher`. The installer also shows available disk space.

   ![Installer destination](../../assets/screenshots/installer-destination.webp)

5. Choose optional tasks, including a desktop shortcut.

   ![Installer additional tasks](../../assets/screenshots/installer-tasks.webp)

6. Select **Run Cafe Launcher** at the end to open the application.

   ![Installation complete](../../assets/screenshots/installer-finished.webp)

Installation, upgrades, and uninstallation apply to all users and require administrator permission. Installing a newer version over the existing one preserves game files and user settings.

### Windows portable build <span id="windows-便携版"></span> {#windows-portable-build}

1. Extract the entire `win-x64.zip` archive.
2. Run `Cafe.Launcher.exe`.
3. Portable builds support in-app updates: choose **Download** when an update is found, then **Restart to Update**. The launcher replaces the portable directory and reopens. Exit and replace files manually only if you want to move the extracted application yourself.

Do not run the executable directly from an archive preview. The portable build has no standard uninstall entry, but settings and logs still use the user data directory.

### macOS

Extract `osx-arm64.zip`, move `Cafe Launcher.app` to Applications, and open it. This build is for Apple Silicon only.

It can install, update, and repair the Windows game files but cannot launch them. The required compatibility layer is not provided.

### Linux

- `.deb`: install through your distribution's package manager.
- `.rpm`: install through an RPM-compatible package manager.
- AppImage: make it executable, then run it.
- `.tar.gz`: extract it and run `Cafe.Launcher`.

Your system must provide graphics, fonts, and basic runtime libraries. If the app does not start, run it from a terminal and check for missing-library messages.

## 4. Complete first-time setup <span id="_4-完成首次设置"></span> {#_4-complete-first-time-setup}

The first launch opens a five-step wizard. Use **Back** to revise earlier choices.

1. **Language**: choose the launcher interface language.
2. **Download source**: Official provides original JP resources. Cafe is provided by the BlueArchive.Cafe JP Chinese localization team and includes Chinese localization resources.
3. **Game installation path**: choose a base directory. The game uses its `YostarGames\BlueArchive_JP` subdirectory. An existing valid installation is detected automatically.
4. **Proxy**: choose automatic, direct, or system proxy mode.
5. **Review**: check the four choices, edit individual items if necessary, then finish to apply them.

Chinese system locales default to the Cafe source; other locales default to Official. Stable builds default to the stable update channel, and prerelease builds default to the beta channel. Both settings can be changed later.

Choosing **Skip** or pressing `Esc` asks for confirmation before applying the defaults.

## 5. Detect or install the game <span id="_5-识别或安装游戏"></span> {#_5-detect-or-install-the-game}

![Main window](../../assets/screenshots/main-window.webp)

- For an existing official installation, select its `BlueArchive_JP` directory. The launcher reads `manifest.json` and `game-launcher-config.json` without downloading the entire game again.
- For a new installation, choose **Install Game**. Downloads can be paused and resumed, and files are verified when complete.
- For a partial installation, the launcher calculates and downloads the missing files from the manifest.

![Download progress](../../assets/screenshots/download-progress.webp)

> [!TIP]
> Check that the directory is writable and has enough space. Linux packages and AppImage default to `YostarGames/BlueArchive_JP` under your home directory instead of a read-only application directory.

Continue with [Settings Reference](/en/cafe-launcher/settings) or [Game Operations](/en/cafe-launcher/operations).
