# Frequently Asked Questions <span id="常见问题"></span> {#frequently-asked-questions}

Find the symptom below. If it persists, retain the exact error and occurrence time, then [export diagnostics](/en/cafe-launcher/feedback).

## Which package should I download? <span id="应该下载哪个文件"></span> {#which-package-should-i-download}

Most Windows users can use the installer; choose win-x64.zip for portable use. Apple Silicon uses osx-arm64.zip. Linux packages depend on your distribution. See the [package table](/en/cafe-launcher/installation#_2-download-the-right-package).

## Can I reuse files downloaded by the official launcher? <span id="可以复用官方启动器下载的游戏吗"></span> {#can-i-reuse-files-downloaded-by-the-official-launcher}

Yes. Use Select Installed Game or Settings → Game to choose the existing `BlueArchive_JP` directory. First-time setup only configures global language, theme, and proxy preferences. The launcher reads manifest.json and game-launcher-config.json and verifies game identity. Avoid simultaneous downloads, repairs, or other changes by both launchers.

## Downloads are slow <span id="下载速度很慢"></span> {#downloads-are-slow}

Check unlimited speed → a suitable proxy mode → disk space and write speed → pause and resume. You can also switch sources; repair installed game files afterward to match the new resources.

Restarting can recover a matching task. Explicitly selecting Stop discards its recovery record.

## Downloads fail, verification fails, or retries keep repeating <span id="下载失败、校验失败或反复重试"></span> {#downloads-fail-verification-fails-or-retries-keep-repeating}

Close the game, confirm directory writability and free space, and check security software for blocked .tmp or game writes. Try another download source and repair if appropriate.

If still failing, record the filename and exact error, increase and save the log level, reproduce, then export. Do not delete unknown temporary files during operations; let the launcher stop and finish cleanup first.

## The launcher says the game is running <span id="启动器提示-游戏正在运行"></span> {#the-launcher-says-the-game-is-running}

Close the game and retry. If its window has disappeared, inspect `BlueArchive.exe` or `xldr_BlueArchiveOnline_JP_loader_x64.exe` in Task Manager.

Linux identifies launcher-owned games and external processes mapped to the installation. An inconclusive or timed-out scan also blocks writes. Confirm the game has ended; export logs if detection remains incorrect.

## Launch verification reports missing files or size mismatches <span id="启动时提示文件缺失或大小不一致"></span> {#launch-verification-reports-missing-files-or-size-mismatches}

Run Repair under Settings → Game. Remote manifest changes the checking reference without repairing files. None can temporarily help isolate verification problems but does not establish file integrity.

## How do Official and Cafe sources differ? <span id="官方下载源与-cafe-下载源有什么区别"></span> {#how-do-official-and-cafe-sources-differ}

Official supplies original Yostar JP resources; Cafe supplies Chinese-localized resources from BlueArchive.Cafe and enables the Resource Panel. Chinese systems default to Cafe and others to Official. Change it in Settings.

Repair after switching to match the new manifest. Resource switches are saved separately for the localization UID; see [Resource Panel](/en/cafe-launcher/resource-panel).

## Settings changes did not take effect <span id="修改设置后没有生效"></span> {#settings-changes-did-not-take-effect}

Check that you selected Save. Appearance preview does not persist by itself and is restored on discard. Main-window path actions save immediately; path edits inside Settings require Save. Network requests and manual update checks use saved preferences.

Paths, sources, runtimes, and after-launch behavior are saved separately; theme, proxy, and speed limits are global. Save or discard a draft before leaving Settings.

## Why did my task not start immediately? <span id="为什么另一游戏的任务没有开始"></span> {#why-did-the-other-games-task-not-start}

Install, update, repair, and uninstall share one task slot. Pause keeps it, and Stop releases it only after cleanup. Blocked requests are not queued: finish or stop the current task, wait for cleanup, then try again. Launch is blocked while files are being processed.

## Where are motion and color extraction settings? <span id="找不到动态效果或取色算法"></span> {#where-are-motion-and-color-extraction-settings}

Motion is under Launcher Settings → Theme & Color → Theme and motion. Extraction algorithm, color variant, and neutrals are in the collapsed Advanced colors section. The extraction option appears only for wallpaper-derived accents. See [Appearance](/en/cafe-launcher/settings#appearance).

## Video background does not play or has no sound <span id="视频背景不播放或没有声音"></span> {#video-background-does-not-play-or-has-no-sound}

1. Windows x64 and Linux and macOS portable builds include the player. Linux system packages install the player dependency through the package manager. A missing or incompatible player falls back to the static background.
2. Choose Settings → Appearance → Background → Custom and a local .mp4, .mkv, or .webm.
3. Restore a visible window and check whether reduced motion or system animation preferences paused playback.
4. Volume defaults to 0. Raise it and unmute; adjustments while muted change retained volume only.
5. On failure, review the notice and logs, select a playable file, and ensure the complete package's video runtime is present. Linux audio also requires a working system audio service and ALSA configuration.

Colors use cover art or the first frame and stay stable during playback. Failure and unsupported platforms show the bundled static fallback.

## How does the launcher update itself? <span id="启动器如何更新"></span> {#how-does-the-launcher-update-itself}

Checks run at startup by default, or manually under Settings → About, using the saved update channel.

Windows installed and portable builds show release notes, download, verify against the same release's SHA256SUMS, then Restart to Update. Missing checksums, packages, or updater lead to an explained Open Release Page fallback. macOS and Linux require manual download and installation.

Check failures do not block use. Beta includes prereleases; stable offers stable releases only.

## Can Linux launch the game? <span id="linux-能直接运行游戏吗"></span> {#can-linux-launch-the-game}

The experimental Linux x64 launcher runs the game through separately installed UMU / Proton or Wine. Historical testing includes Arch + UMU 1.4.4 + UMU-Proton 10.0-4 with NTFS3 game files. Anti-cheat compatibility varies with environment and game versions; other combinations are not guaranteed. See [runtime settings](/en/cafe-launcher/settings#compatibility-runtime-linux-only).

## Can the macOS launcher launch the game? <span id="macos-能启动游戏吗"></span> {#can-the-macos-launcher-launch-the-game}

Currently no. The Apple Silicon build installs, updates, and repairs files but does not provide a compatibility layer for launching the Windows game.

## How do I view or export logs? <span id="如何查看或导出日志"></span> {#how-do-i-view-or-export-logs}

Under Settings → Advanced, View Log browses loaded records, Export Logs creates a ZIP for a time range, and Open Data Directory locates originals. Exports stay local; review paths and UIDs before sharing. See [Export logs](/en/cafe-launcher/feedback#export-logs).

## How do I recover damaged settings? <span id="设置文件损坏后如何恢复"></span> {#recover-damaged-settings}

If `settings.json` cannot be parsed, the launcher uses defaults. Before it next writes settings, it backs up the original to `settings.corrupt.json` in the [launcher data directory](/en/cafe-launcher/uninstall). If that name is already taken by a different backup, the launcher adds a number. If the file can be parsed but its version or structure is unsupported, the launcher preserves it and blocks writes. Close the launcher before restoring a valid backup.

## How do I remove everything? <span id="如何彻底卸载"></span> {#how-do-i-remove-everything}

Remove the application, user data, and game directory separately. Check scope and back up first, then follow [Uninstall and data](/en/cafe-launcher/uninstall). Removing user data also deletes managed compatibility environments inside it.

## Language resources are missing at startup <span id="启动时提示语言资源缺失怎么办"></span> {#language-resources-are-missing-at-startup}

If startup fails and the log reports missing or unloadable language resources, download the complete package again from [Releases](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/releases), then reinstall it or extract all of its contents. Keep the language directories and replace the full application rather than only its executable. You do not need to delete user data or game files. If it still fails, provide logs using the [feedback guide](/en/cafe-launcher/feedback).

## v1.1.0-beta.5 crashes at startup <span id="v1-1-0-beta-5-启动器无法启动-启动即崩溃"></span> {#v1-1-0-beta-5-crashes-at-startup}

This is a historical issue: the initial beta.5 build lacked a concrete WindowFilePickerService registration. Logs contain `NoServiceRegistered, Cafe.Launcher.Avalonia.Services.WindowFilePickerService`; the affected CommitSha was `b33915d`.

It was subsequently fixed. Replace that build with a newer complete package from [Releases](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/releases). Separate game files and user settings are preserved. For startup failures in other builds, investigate the actual current error.

## I still need help <span id="仍然无法解决"></span> {#i-still-need-help}

Follow the [feedback guide](/en/cafe-launcher/feedback) with version, environment, steps, expected and actual behavior, and a reviewed log ZIP, then open an [Issue](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues).
