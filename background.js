chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "AmazonSearch",
        title: "Search Amazon for '%s'",
        type: "normal",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
    let url = "https://www.amazon.com/s?k=" + item.selectionText;
    chrome.tabs.create({url: url, index: tab.index + 1});
});