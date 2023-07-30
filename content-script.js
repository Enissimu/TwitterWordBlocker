var list = document.querySelectorAll('[data-testid="cellInnerDiv"]');
var storageCache = chrome.storage.local
  .get(["words"])
  .then((result) => {
    conditions = result.words;

    for (var i = 0; i < list.length; i++) {
      var buttonForMore = list[i].getElementsByClassName(
        "css-901oao r-1awozwy r-1bwzh9t r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"
      );
      var tag = list[i].getElementsByClassName(
        "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
      )[3];
      var nameOf = list[i].getElementsByClassName(
        "css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
      )[1];
      if (tag && nameOf) {
        var doesItInclude = conditions.some((el) =>
          tag.textContent.toLowerCase().includes(el)
        );
        var doesItInclude1 = conditions.some((el) =>
          nameOf.textContent.toLowerCase().includes(el)
        );
        if (doesItInclude || doesItInclude1) {
          console.log(buttonForMore[0]);
          buttonForMore[0].click();
          const blockButton = document.querySelector('[data-testid="block"]');
          blockButton.click();
          const confirmButton = document.querySelector(
            '[data-testid="confirmationSheetConfirm"]'
          );
          confirmButton.click();
        }
      }
    }
  })
  .catch((err) => console.log(err));
