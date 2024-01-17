let  word = prompt("cevireceyiniz sozu daxil edin")
function reversetoString(str) {
    let result =str.split("")
    let result2=result.reverse()
    result3=result2.join("")
    console.log(result3);

}
reversetoString(word)
