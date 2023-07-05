function linkToNewTab() {
    document.querySelectorAll('a').forEach((elem) => {
        elem.setAttribute('target','_blank');
    })
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: linkToNewTab
    });
});