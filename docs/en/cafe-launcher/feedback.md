# Feedback Guide <span id="反馈指南"></span> {#feedback-guide}

A version number, clear reproduction steps, and logs help diagnose issues faster than a general report that the launcher does not work. Development issues are tracked in the [source repository's Issues](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues).

## Before reporting <span id="提交前"></span> {#before-reporting}

1. Check your version and available updates in Settings → About.
2. Search the [FAQ](/en/cafe-launcher/faq) and existing Issues.
3. Restart the launcher and check whether you can reproduce the problem.
4. For download or repair problems, record the source, proxy mode, and disk containing the game directory.
5. State explicitly if you use macOS or Linux. These are experimental, and macOS does not support game launch.

## What to include <span id="一份有效的反馈应包含"></span> {#what-to-include}

- **Title**: describe the action and result, such as “Cafe source repeatedly verifies the same file after resuming.”
- **Version**: version, build configuration, and commit from Settings → About.
- **Environment**: operating system version, architecture, proxy, and compatibility runtime if used.
- **Steps**: a sequence starting from a clear initial state.
- **Expected result**: what should happen.
- **Actual result**: the message, state, or error you see.
- **Attachments**: relevant screenshots and a log ZIP.

Copy complete error messages where possible. For intermittent issues, include how often they occur and when they last happened.

## Export logs <span id="导出日志"></span> {#export-logs}

1. Open Cafe Launcher and go to Settings → Advanced.
2. For network or download problems, temporarily set the log level to Debug or Verbose and save.
3. Reproduce the issue.
4. Return to Advanced and choose **Export Logs** to open the diagnostics export dialog.

   ![Export diagnostics](../../assets/screenshots/log-export.webp)

5. Choose a time range: all records by default, or the last hour, 24 hours, 7 days, or 30 days.
6. Optionally include crash reports or user data. Log files and system information are always included.
7. Choose **Export** and a destination to save `CafeLauncher_Logs_<timestamp>.zip`.

The ZIP contains current and rotated logs plus `system-info.json`. It can contain local paths, system versions, and network error addresses. Review it before sharing; do not include passwords, Cookie files, access tokens, or other sensitive information.

> [!WARNING]
> User data includes settings, download progress, and notice-read state, potentially including local paths and a UID. Leave it unchecked unless a maintainer specifically requests it.

## Screenshots and privacy <span id="截图与隐私"></span> {#screenshots-and-privacy}

- Hide account details, UIDs, personal paths, and private notifications in screenshots.
- Do not publicly upload an entire user data directory without reviewing its contents.
- Game crash logs and Cafe Launcher logs are different. Prefer the launcher's built-in export.
- For information unsuitable for public posting, contact <feedback@bluearchive.cafe> and reference a related Issue if available.

## Where to report <span id="提交位置"></span> {#where-to-report}

- Bugs, compatibility issues, and feature suggestions: [GitHub Issues](https://github.com/bluearchive-cafe/Cafe.Launcher.Avalonia/issues).
- Usage questions: start with the [overview](/en/cafe-launcher/) and [FAQ](/en/cafe-launcher/faq).
- Localization client problems: see the [localization FAQ](/en/guide/qa).
