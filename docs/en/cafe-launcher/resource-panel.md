# Resource Panel <span id="资源面板"></span> {#resource-panel}

The Resource Panel manages BlueArchive.Cafe Chinese localization resources using a UID. Open it from the clipboard icon to the left of the settings gear in the title bar.

![Resource Panel](../../assets/screenshots/resource-panel.webp)

> [!IMPORTANT]
> The panel requires the Cafe download source. If you use Official, opening it prompts you to switch. After changing sources, [repair the installed game](/en/cafe-launcher/operations#repair) against the new manifest.

## UID

The panel needs the eight-letter localization UID, **not** the numeric UID shown in your game account information.

| Source | Behavior |
| --- | --- |
| Automatic | Default; reads the UID from local game Cookie data. On Linux, reads from the configured UMU or Wine prefix |
| Custom | Enter a UID manually, for example when that client has not been used on this computer |

Selecting Custom reveals **Edit UID**. Enter eight uppercase letters A–Z, such as `ABCDEFGH`. If automatic reading fails, an input field appears so you can enter and save a UID.

If no UID has been generated, the panel explains that you must first launch the game using the Cafe source.

## Resource categories <span id="资源类别"></span> {#resource-categories}

| Category | Contents |
| --- | --- |
| Game text | Chinese text for stories, interface, items, and other content |
| Chinese main story voices | Chinese voice resources for the main story |
| Images and videos | Localized visual resources |

Each category shows a toggle, status, and the official and localized resource version identifiers.

| Status | Meaning |
| --- | --- |
| Available | Localized resources match the official version and can be enabled |
| Maintenance pending | Versions differ, usually because localization has not caught up with a game update; the toggle remains available |
| Loading / Failed | Data is being fetched or could not be fetched; use Refresh to retry |

## Save and apply <span id="保存与生效"></span> {#save-and-apply}

- **Refresh** fetches the latest status and versions from the server.
- **Save Settings** saves the resource choices. Restart the game for them to take effect.

The status bar shows the active UID and the result of the latest operation. To use original JP resources, disable the relevant categories and save.
