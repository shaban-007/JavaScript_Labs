for (var i =2;i<100;i++){
    var x= happy_number(i);
    if(x==1){
        console.log("number is happy ", i);
    }
}


function happy_number(num) 
{
    var m, n;
    var array = [];
    
    while(num != 1 ) 
    {
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num - n) / 10 ;
        }
        num = m ;
        for (var i=0;i<array.length;i++){
            if (array[i] === num){return num;}
        }
        array.push(num);
    }
    return num;
}




