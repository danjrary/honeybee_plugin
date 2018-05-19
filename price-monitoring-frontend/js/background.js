// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
  if (tab.url.toLowerCase().indexOf("https://online.carrefour.com.tw/") > -1) {
    chrome.pageAction.show(tab.id);
  }
});