var addWordsToHtml = (words) => {
  alert(words);
};

chrome.storage.local.get(["words"]).then((result) => {
  addWordsToHtml(JSON.stringify(result, null, 4));
});
var injectTheScript = () => {
  var words = document.getElementById("words").value.split(/[ ,]+/);
  if (words === "") {
    alert("enter valid words.");
  } else {
    alert(words);
    chrome.storage.local.get(["words"]).then((result) => {
      if (Object.keys(result).length !== 0) {
        addWordsToHtml(JSON.stringify(result, null, 4));
      } else {
        chrome.storage.local.set({ words: words }).then((result) => {
          alert("There is  " + result);
        });
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("setWords")
    .addEventListener("click", injectTheScript);
});
