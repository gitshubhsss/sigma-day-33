//user enters a max number then tries to geuss a random generated number 1 to max ;
let usernum=prompt("Enter a number");//100
let randomNum=Math.floor(Math.random()*usernum+1);//75
let guessNum=prompt("guess the number");
while((randomNum!=guessNum) && (guessNum!="quit")){
    if(randomNum>guessNum){
       guessNum=prompt(`Please Enter a bigger number than ${guessNum}`)
    }  
    else if(randomNum<guessNum){
       guessNum= prompt(`Please Enter a smaller number than ${guessNum}`)
    }  
}


