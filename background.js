const tellContentScriptToReload = (tab) => {
  var { tabId } = tab;

  chrome.scripting
    .executeScript({
      target: { tabId },
      files: ["content-script.js"],
    })
    .then(() => {
      console.log("injected a function");
    });
};
chrome.webRequest.onCompleted.addListener(tellContentScriptToReload, {
  urls: ["https://api.twitter.com/1.1/live_pipeline/update_subscriptions"],
});
