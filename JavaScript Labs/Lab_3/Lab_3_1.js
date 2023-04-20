function letter_position(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
       var charCode = text.toUpperCase().charCodeAt(i); // to return make the letter uppercase and get the unicode for each letter (A,B,C,D)=>(68,69,70,71)
      if (charCode > 64 && charCode < 91) {
        result += (charCode - 64) + " ";
      }
    }
    return result;
  }


  console.log(letter_position("The sunset sets at twelve o' clock."));
