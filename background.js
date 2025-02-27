"use strict";

// chrome.tabs.onCreated.addListener(() => {
//     console.log("New Tab~");
    
// });

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ["script.js"]
//     });
//   });

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.scripting.executeScript({
        target: { tabId: activeInfo.tabId },
        files: ["script.js"]
    });
}
);

    
