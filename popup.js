function injectTheScript() {
    // Wuery the active tab, which will be only one tab and inject the script in it.
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['main_script.js']})
    })
}



document.getElementById('clickactivity').addEventListener('click', injectTheScript)
document.addEventListener("click", (event) => {
    console.log(event.offsetX, event.offsetY);
  });