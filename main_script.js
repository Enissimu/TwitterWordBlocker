// var list = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l")
// var buttonList=document.getElementsByClassName("css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr")
var list=document.querySelectorAll('[data-testid="cellInnerDiv"]')
var conditions=["bahis","bet","kripto","bahse","casinos","slot"]

document.elementFromPoint(605,10).click()

// console.log(document.getElementsByClassName("css-1dbjc4n r-1oszu61 r-1niwhzg r-18u37iz r-16y2uox r-1wtj0ep r-2llsf r-13qz1uu"))
  for (var i = 0; i < list.length; i++) {
      var buttonForMore=list[i].getElementsByClassName('css-901oao r-1awozwy r-1bwzh9t r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0')
      var tag=list[i].getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[3]; 
      var nameOf=list[i].getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[1];
      if(tag && nameOf){
      console.log(tag.textContent,nameOf.textContent)

        var doesItInclude=conditions.some(el=>tag.textContent.toLowerCase().includes(el))
        var doesItInclude1=conditions.some(el=>nameOf.textContent.toLowerCase().includes(el))
        if(doesItInclude || doesItInclude1)
        {
          console.log(buttonForMore[0])
        buttonForMore[0].click()
        const blockButton=document.querySelector('[data-testid="block"]')
        blockButton.click()
        const confirmButton=document.querySelector('[data-testid="confirmationSheetConfirm"]')
        confirmButton.click()
        console.log(blockButton,confirmButton)
        console.log(tag.textContent,nameOf.textContent,"ORRRROSPUCOCUKLARI")
       }
      }
   
      if(i==list.length-1){
  nameOf.scrollIntoView()     
 } 
  }
//TUM TWEETI SEC RETWEETLENMISSE DE AYAR CEK DAHA FAZLA SECENEGINE DE AYAR CEK ESLESSIN ISIMLE BUTTON
//FOCUSING ON THE FIRST TWO TWEET CHANGİNG THE FOCUS FROM EXTENSION WHILE LOOP FOR EXTENSION