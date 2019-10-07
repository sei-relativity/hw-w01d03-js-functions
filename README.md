1#
let array=['paper','rock','scissors'] ; 
let random=Math.floor(Math.random() *(array.length));
let computerChoice=array[random] ; 

const playGame = function (myChoice){
 
 if (myChoice === computerChoice) {

       console.log("Tie") ; } 

else if (myChoice === 'paper' && computerChoice ==='rock' ) {
    console.log(" User You Win !") ; 
} 
else if (myChoice === 'rock'&& computerChoice==='scissors') {
    console.log(" User You Win !") ; 

}
else if (myChoice === 'scissors'&& computerChoice==='rock') {
    console.log("User You Lose !") ; 

}
else if (myChoice === 'rock'&& computerChoice==='paper') {
    console.log(" User You Lose !") ; 

}
else if (myChoice === 'paper'&& computerChoice==='scissors') {
    console.log("User You Lose !") ; 

}
else if (myChoice === 'scissors'&& computerChoice==='paper') {
    console.log("User You Lose !") ; 

}

}


2#
const diceRoller = function(){
    let numOne= Math.floor(Math.random() * 6 ) + 1;
    let numTwo= Math.floor(Math.random() * 6 ) + 1;
    
    return "Dice rolled are " + numOne +  " and " + numTwo  +" Sum is " + (numberOne + numberTwo);
    } 


3#

Name: toUpperCase()
Description: converte string to upper case 
Example using it:
var Name = "dalia" 
var NameInUpperCase = Name.toUpperCase();



Name: concat()
Description: To join two or more strings 
Example using it: 
    var text1 = "hope"; 
    var text2 = text1.concat('my ',' future',' will',' lead',' new destination'); 
    console.log (text2);



 Name: charAt()
Description: returns the character at a specified index in a string
Example using it:
var Name = "dalia";
Name.charAt(0); 
