# Game Operations <span id="游戏操作"></span> {#game-operations}

The main button shows **Install Game**, **Update Game**, or **Start Game** based on local files and the remote version. During an operation, the bottom area shows progress and controls.

## Install and update <span id="安装与更新"></span> {#install-and-update}

1. Choose **Install Game** or **Update Game**.
2. The launcher reads the remote manifest and calculates required downloads.
3. Files are staged as `.tmp` files and resumed when the server supports it.
4. Completed downloads undergo CRC64 verification.
5. Once all files pass verification, the launcher updates the local manifest and game configuration.

![Download progress](../../assets/screenshots/download-progress.webp)

Progress shows the completion percentage, speed, downloaded and total size, and estimated time remaining. The status area also identifies the active source, Cafe or Official.

- **Pause** preserves progress for later.
- **Continue** resumes from the saved temporary files.
- **Stop** cancels the operation; confirming it discards the current download task state.
- **Speed limit** can be changed under Settings → Download & Network.

On the next launch, a saved task is resumed only if its game version, manifest, directory, and download source still match.

## Repair <span id="修复"></span> {#repair}

For missing files, resource problems, or repeated launch failures:

1. Close the game.
2. Open Settings → Game, or use **Repair** in the [game menu](#game-menu).
3. Choose **Repair** and confirm.

   ![Repair confirmation](../../assets/screenshots/dialog-repair.webp)

4. Wait while files are checked against the remote manifest.
5. Missing files and checksum mismatches are downloaded again.

Repair checks CRC64, which is more thorough than the size checks performed before launch. The installation state is refreshed afterward. If repair still fails, try the other download source or [export logs](/en/cafe-launcher/feedback). Failure notifications for installation, repair, and updates provide a **View Log** action.

Changing sources prompts a repair because Official and Cafe use different manifests. Repair against the current source before relying on launch verification.

## Launch the game <span id="启动游戏"></span> {#launch-the-game}

Choose **Start Game** to verify files using the selected mode and launch the configured game entry point. By default, a successful launch minimizes the launcher to the system tray.

The control panel and tray show the session progressing from starting to running, then exited with its exit code. No session means no status line. A normal exit updates that line without an extra notification.

If a Wine or Proton runner exits before game processes appear, the launcher restores its main window and reports that the game failed to start, including the exit code.

If verification finds missing or mismatched files, the launcher offers repair and shows their counts in the status panel.

![Repair offered after launch verification](../../assets/screenshots/dialog-repair-launch-check.webp)

On Linux, choose the runtime in Settings → Game: Auto, Windows (Native), UMU / Proton, or Wine. This is experimental and anti-cheat compatibility depends on the environment.

The macOS launcher cannot launch the game and has no current plan to provide a compatibility layer. It still supports installation, updates, and repair.

## Game menu <span id="游戏操作菜单"></span> {#game-menu}

Open the dropdown beside the game card:

![Game menu](../../assets/screenshots/game-menu.webp)

- **Check for Updates** refreshes the remote version and main button.
- **Add Desktop Shortcut** creates a game shortcut on Windows.
- **Open Game Directory** opens the current installation in the file manager.
- **Repair** performs the integrity check described above.
- **Uninstall** opens the uninstall flow described below.

## Uninstall the game <span id="卸载游戏"></span> {#uninstall-the-game}

1. Close the game.
2. Choose **Uninstall** in Settings → Game or the game menu.
3. Check the installation path and estimated directory size.
4. Optionally select removal of launcher-managed Wine / Proton compatibility environments.
5. Confirm and wait for scanning, deletion, and cleanup to finish. The result reports files and bytes actually removed, plus any remaining items.

> [!WARNING]
> Game uninstall deletes the **entire game directory** by default, including resources downloaded by the game and files you added. It also cleans up installation state, the resume record, and the desktop shortcut. Back up anything you want to keep before confirming. Custom Prefixes outside the game directory and launcher-managed compatibility directory are preserved.

Keep the launcher running until uninstall finishes; you can minimize it. If files remain, check the paths and reasons in the result before removing them manually.

Game uninstall and launcher uninstall are separate operations. Uninstalling the launcher itself preserves the game directory. See [Uninstall and Data](/en/cafe-launcher/uninstall).

## Log viewer <span id="日志查看器"></span> {#log-viewer}

Settings → Advanced → **View Log** opens current and rotated logs with keyword search and level filters.

![Log viewer](../../assets/screenshots/log-viewer.webp)

Records load in batches. Search and filters apply only to loaded records. For intermittent problems, increase the log level temporarily, reproduce the issue, and export logs immediately.

## System tray <span id="系统托盘"></span> {#system-tray}

With close behavior set to minimize to tray:

- The window close button hides the window while the process continues running.
- Right-click the tray icon to start the game or open settings. The launch item shows the session state while the game is starting or running. These actions restore the main window when a prompt is needed.
- The tray menu also restores the window or exits the launcher.

  ![System tray menu](../../assets/screenshots/system-tray.webp)

- Opening Cafe Launcher again activates the existing instance instead of opening a second one.
