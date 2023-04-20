function sortString(str) {
    words = str.split(" ");
    sortedtext = [];
    for (var i = 0; i < words.length; i++) {
      word = words[i];
      position = parseInt(word.match(/\d/));//search for any number is the word and make is a number
      sortedtext[position - 1] = word;
    }
    return sortedtext;
  }


  text= "is2 Thi1s T4est 3a" ;
  text2="4of Fo1r pe6ople g3ood th5e the2"
  alert(text + "=====>" +sortString(text));
  alert(text2 + "=====>"+sortString(text2));