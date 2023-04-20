var random=6;
var guess = 0;
var counter=0;



while(counter!=4){
    if(counter===3){alert("Game Over THE NUMBER IS "+random);break;}
    guess = prompt("Guess The Number");
    if(guess === random){
        alert("good work the number is "+guess);
        break;
    }
    if (confirm("False Do you want to try again?")){
        counter++;
    }
    else {alert("Game Over THE NUMBER IS "+random);break;}
}