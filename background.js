function redPage() {
    document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("reddit.com")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: redPage
        });
    }
});

