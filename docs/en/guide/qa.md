# Localization FAQ <span id="常见问题"></span> {#localization-faq}

## Risk <span id="风险问题"></span> {#risk}

### Can using the localization result in an account ban? <span id="使用汉化会导致封号吗"></span> {#can-using-the-localization-result-in-an-account-ban}

The project reports no known bans caused by using its localization. This does not guarantee that bans cannot occur. Decide whether to use it based on your own tolerance for risk. [The project accepts no liability for losses arising from using or being unable to use it](https://github.com/bluearchive-cafe/bluearchive-cafe?tab=AGPL-3.0-1-ov-file).

## Usage <span id="使用问题"></span> {#usage}

### Localization is not applied on first launch <span id="初次使用汉化没有生效"></span> {#localization-is-not-applied-on-first-launch}

Localization features are disabled by default. Enable them manually through the [in-game control panel](/en/guide/#in-game-control-panel) or the [browser control panel](/en/guide/#browser-control-panel).

### The game asks for the latest client <span id="需下载最新版本客户端"></span> {#the-game-asks-for-the-latest-client}

Download the updated client from the [download page](https://bluearchive.cafe/download) and install it over the existing localized client.

## Downloads <span id="下载问题"></span> {#downloads}

### Downloaded game resources are repeatedly reported as corrupt <span id="下载游戏资源反复损坏"></span> {#downloaded-game-resources-are-repeatedly-reported-as-corrupt}

Check your connection and try restarting the game a few times. If the issue persists, close the game, remove `catalog_Remote.hash` from the game resource directory, and remove the `Catalog` subdirectories inside `TableBundles`, `AssetBundles`, and `MediaPatch`. Restart the game to download them again.

### Loading gets stuck after replacing resources <span id="替换资源之后卡在加载"></span> {#loading-gets-stuck-after-replacing-resources}

Close the game, remove `catalog_Remote.hash` and the `Catalog` subdirectories described above, then restart the game.

## Other errors <span id="异常问题"></span> {#other-errors}

### Images appear as upside-down notices <span id="图像显示为颠倒的公告"></span> {#images-appear-as-upside-down-notices}

On the title screen, choose **Menu → Check Game Resource Integrity**, or disable localized images and restart the game.

### The game freezes or crashes when changing scenes <span id="切换场景时卡住或闪退"></span> {#the-game-freezes-or-crashes-when-changing-scenes}

Try **Menu → Check Game Resource Integrity** on the title screen. Alternatively, disable localized images and restart the game.
