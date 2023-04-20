var num1 = prompt("Enter a number 1:");
var num2 = prompt("Enter a number 2:");
var num3 = prompt("Enter a number 3:");
if (num1 > num2) {
  if(num2>num3){
    
  }
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  
  if (num1 > num3) {
    let temp =num1;
    num1 = num3;
    num3 = temp;
  }
  
  if (num2 > num3) {
    let temp = num2;
    num2 = num3;
    num3 = temp;
  }
  alert(num3 + ', ' + num2 + ', ' + num1);