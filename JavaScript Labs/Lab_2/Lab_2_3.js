function isprime(number) {
    var dev=0;
    for(var i=1;i<=number;i++){
        if(number%i===0){
            dev++;
        }
    }
    if(dev===2){
        return true;
    }
    else{
        return false;
    }
  }

  var x = prompt("Enter the number :")
  x = parseInt(x);
 if(isprime(x)){
    alert("prime");
  }
  else{alert("Not prime")}