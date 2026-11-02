# Uninstall and Data <span id="卸载与数据"></span> {#uninstall-and-data}

Application files, user data, and the game directory are separate. Decide which part to remove before choosing the steps.

## Uninstall the launcher <span id="卸载启动器"></span> {#uninstall-the-launcher}

Removing the application preserves separate game files. User data handling depends on the package below.

### Windows installer <span id="windows-安装版"></span> {#windows-installer}

Uninstall through Windows Settings → Apps or the Start menu. Interactive removal optionally deletes current-user data, unchecked by default. Silent uninstall preserves user data.

### Windows portable build <span id="windows-便携版"></span> {#windows-portable-build}

Exit, then delete the whole extracted application directory. There is no separate registry configuration; settings and logs remain in the system user data directory.

### macOS and Linux <span id="macos-与-linux"></span> {#macos-and-linux}

Delete the bundle, AppImage, or extracted directory. Use the package manager for DEB, RPM, and Arch packages. User data and game files are not removed with the package.

## User data directory <span id="用户数据目录"></span> {#user-data-directory}

| Platform | Default location |
| --- | --- |
| Windows | `%LOCALAPPDATA%\Cafe Launcher` |
| macOS | `~/Library/Application Support/Cafe Launcher` |
| Linux | `$XDG_DATA_HOME/cafe-launcher`, or `~/.local/share/cafe-launcher` without a valid absolute XDG path |

Use Settings → Advanced → Open Data Directory to confirm the path. Settings, logs, caches, recovery records, and managed compatibility environments share it.

Linux upgrades attempt to migrate the old Cafe Launcher directory in the same data home. Existing destination entries and failed moves leave old files in place. Inspect the old directory before deleting it.

## Data files <span id="数据文件"></span> {#data-files}

| File or directory | Purpose | Can it be deleted? |
| --- | --- | --- |
| `settings.json` | Language, theme, networking, paths, and other settings | Yes; defaults are restored on next launch |
| `download_state.json` | Resumable download task state | Yes; saved resume progress is lost |
| `unified.log`, `unified_*.log` | Current and rotated diagnostic logs | Yes; diagnostic history is lost |
| `shown_notices.json` | Notices already displayed | Yes; some notices may appear again |
| `image-cache/` | Remote backgrounds, banners, release-note images, and other cached images | Yes; downloaded again when needed |
| `CrashReports/` | Local crash snapshots | Yes; crash diagnostics are lost |
| `update/` | Staged launcher update packages and checksums | When no update is in progress; downloads will be needed again |
| `compatibility/` | Launcher-managed Wine / Proton Prefixes | Deletes their login state and compatibility data; prefer the optional cleanup in game uninstall |
| `runner_output.log`, `compatibility_environment.json`, `prefix_metadata.json` | Latest runner output, environment precheck, and Prefix metadata | Yes; these diagnostics are lost |
| `log-exports/` | Exported log ZIP files | Yes |

> [!WARNING]
> Exit Cafe Launcher before deleting its data. Keep or export logs first if you still need help with a problem.

## Game directory <span id="游戏目录"></span> {#game-directory}

Normally YostarGames/BlueArchive_JP under the selected base directory. manifest.json records the manifest; game-launcher-config.json records version and launch target. Other files belong to the game and its resources. Avoid simultaneous operations with the official launcher and do not move the directory during download, repair, or removal.

## Uninstall the game <span id="卸载游戏"></span> {#uninstall-the-game}

Close the game, choose Uninstall under Settings → Game or the game menu, and review the path, size, and additional options.

> [!WARNING]
> The whole game directory is removed, including game-downloaded resources and files you added, along with installation state, recovery records, and desktop shortcuts. Back up anything needed first.

Managed Wine / Proton environments remain unless additional cleanup is selected. Custom Prefixes outside the game directory and selected managed subtree are preserved. Scanning, deletion progress, and results include paths that could not be removed. Keep the launcher open until completion.

## Remove everything <span id="彻底清理"></span> {#remove-everything}

1. Uninstall the game in the launcher, deciding whether to remove its managed compatibility environment.
2. Uninstall or delete the application.
3. Exit related processes, confirm the path, then remove user data.
4. Separately remove exported ZIPs, external custom Prefixes, or original background files if desired.

Removing user data also removes managed compatibility environments and their login state. Removing a local UID does not delete server preferences. Contact maintainers as described in the [privacy policy (Chinese)](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/blob/main/PRIVACY.md).
