
const diceRoller = function() {

    let num1 = Math.floor(Math.random() * 6 ) + 1 ;
    let num2 = Math.floor(Math.random() * 6 ) + 1 ;
    return console.log (" num 1 = " + num1 + ", num 2 = " + num2 + " , The sum is " + (num1+num2) );
    
}