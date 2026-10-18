# Uninstall and Data <span id="卸载与数据"></span> {#uninstall-and-data}

## Uninstall the launcher <span id="卸载启动器"></span> {#uninstall-the-launcher}

### Windows installer <span id="windows-安装版"></span> {#windows-installer}

Find Cafe Launcher in Windows Settings → Apps, or use its Start menu uninstall entry.

Interactive uninstall offers an option to delete the current user's Cafe Launcher data; it is off by default. Silent uninstall always keeps user data. The installer does not delete the game directory.

### Windows portable build <span id="windows-便携版"></span> {#windows-portable-build}

Exit Cafe Launcher and delete the extracted application directory. The portable build has no separate registry configuration, but settings and logs still reside in the system's local application data directory.

### macOS and Linux <span id="macos-与-linux"></span> {#macos-and-linux}

Delete the app bundle, AppImage, or extracted directory. For `.deb` or `.rpm` installations, use the system package manager. User data and game files are not automatically removed.

## User data directory <span id="用户数据目录"></span> {#user-data-directory}

Cafe Launcher creates a `Cafe Launcher` directory in the system's local application data location. Common paths are:

| Platform | Common location |
| --- | --- |
| Windows | `%LOCALAPPDATA%\Cafe Launcher` |
| macOS | `~/Library/Application Support/Cafe Launcher` |
| Linux | `~/.local/share/Cafe Launcher` |

Use Settings → Advanced → **Open Data Directory** to find the actual location on your system.

## Data files <span id="数据文件"></span> {#data-files}

| File or directory | Purpose | Can it be deleted? |
| --- | --- | --- |
| `settings.json` | Language, theme, networking, paths, and other settings | Yes; defaults are restored on next launch |
| `download_state.json` | Resumable download task state | Yes; saved resume progress is lost |
| `session.active` | Abnormal exit detection marker | Removed automatically on normal exit |
| `unified.log`, `unified_*.log` | Current and rotated diagnostic logs | Yes; diagnostic history is lost |
| `shown_notices.json` | Notices already displayed | Yes; some notices may appear again |
| `clickCode` | Installation source identifier | Yes |
| `log-exports/` | Exported log ZIP files | Yes |

> [!WARNING]
> Exit Cafe Launcher before deleting its data. Keep or export logs first if you still need help with a problem.

## Game directory <span id="游戏目录"></span> {#game-directory}

The game normally lives under `YostarGames/BlueArchive_JP` in the selected base directory:

- `manifest.json` records the file manifest.
- `game-launcher-config.json` records the game version and launch entry point.
- Other files contain the game and its resources.

Cafe Launcher and the official launcher can share this directory. Do not run both launchers together or move files manually during downloads or repairs.

## Uninstall the game <span id="卸载游戏"></span> {#uninstall-the-game}

Choose **Uninstall** in Settings → Game or the game menu. Check the path and estimated size before confirming.

> [!WARNING]
> This deletes the entire game directory, including resources downloaded by the game and your own files. Back up anything you need first. Installation state, the resume record, and the desktop shortcut are also cleaned up.

Launcher-managed compatibility environments are kept unless you select the additional removal option. A custom Prefix outside both the game directory and launcher-managed compatibility directory is preserved.

The same panel shows scanning, deletion progress, and the result. It lists items that could not be removed and reports actual deleted files and size. Keep the launcher running until it finishes; minimizing is allowed.

## Remove everything <span id="彻底清理"></span> {#remove-everything}

To remove the game, launcher, and user data:

1. Uninstall the game through Settings → Game, or carefully check and delete its directory manually.
2. Uninstall or delete the launcher.
3. Delete the user data directory.

These locations are independent. Check each path to avoid removing unrelated files from a shared parent directory.
