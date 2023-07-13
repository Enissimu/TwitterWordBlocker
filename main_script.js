// var list = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l")
// var buttonList=document.getElementsByClassName("css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr")
var list=document.querySelectorAll('[data-testid="cellInnerDiv"]')
var conditions=["bahis","bet","kripto","bahse","casinos"]
console.log(innerHeight)
console.log(outerHeight)
console.log(innerWidth)
console.log(outerWidth)
document.elementFromPoint(605,10).click()
document.elementFromPoint(605,10).click()
document.elementFromPoint(605,10).click()

// console.log(document.getElementsByClassName("css-1dbjc4n r-1oszu61 r-1niwhzg r-18u37iz r-16y2uox r-1wtj0ep r-2llsf r-13qz1uu"))
  for (var i = 0; i < list.length; i++) {
      var buttonForMore=list[i].querySelectorAll('[data-testid="caret"]')
      var tag=list[i].getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[3]; 
      var nameOf=list[i].getElementsByClassName("css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0")[1];
      // console.log(tag.textContent,nameOf.textContent)
      console.log(nameOf.textContent,tag.textContent,buttonForMore[0])
      buttonForMore[0].focus()
      buttonForMore[0].click()
      var doesItInclude=conditions.some(el=>tag.textContent.toLowerCase().includes(el))
      var doesItInclude1=conditions.some(el=>nameOf.textContent.toLowerCase().includes(el))
      if(doesItInclude || doesItInclude1 || i==0)
      {
      console.log(tag.textContent,nameOf.textContent,"ORRRROSPUCOCUKLARI")
     }
      if(i==list.length-1){
  nameOf.scrollIntoView()     
 } 
  }
//TUM TWEETI SEC RETWEETLENMISSE DE AYAR CEK DAHA FAZLA SECENEGINE DE AYAR CEK ESLESSIN ISIMLE BUTTON
//FOCUSING ON THE FIRST TWO TWEET CHANGİNG THE FOCUS FROM EXTENSION WHILE LOOP FOR EXTENSION