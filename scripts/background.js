chrome.runtime.onInstalled.addListener(function() {
    // Create a context menu item
    chrome.contextMenus.create({
      id: "copy_voice_transcript",
      title: "Copiar Transcript de Reunião",
      contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "inspect_clipboard",
        title: "Inspect Clipboard",
        contexts: ["all"]

    })
  });
  
// Add a listener for context menu item clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copy_voice_transcript") {
        if(tab.url.match("https://tldv.io/app/meetings/*")){
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["scripts/features/voice-log/getVoiceLog.js"]
            });
            return;
        }
        else {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["scripts/features/voice-log/errors/errorWrongPage.js"]
            });
            return;
        }
    }
    if(info.menuItemId === "inspect_clipboard") {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ["scripts/features/dev-inspect-clipboard/inspect-clipboard.js"]
        });
        return
    }
});