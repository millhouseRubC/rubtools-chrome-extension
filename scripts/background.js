chrome.runtime.onInstalled.addListener(function() {
    // Create a context menu item
    chrome.contextMenus.create({
      id: "copy_voice_transcript",
      title: "Copiar Transcript de Reunião",
      contexts: ["all"]
    });
  });
  
// Add a listener for context menu item clicks
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copy_voice_transcript") {
        if(tab.url.match("https://tldv.io/app/meetings/*")){
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["scripts/getVoiceLog.js"]
            });
            return;
        }
        else {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["scripts/errorWrongPage.js"]
            });
            return;
        }
    }
});