const diceRoller = function(){
let numberOne= Math.floor(Math.random() * 6 ) + 1;
let numberTwo= Math.floor(Math.random() * 6 ) + 1;

return "Dice rolled are " + numberOne +  " and " + numberTwo  +" Sum is " + (numberOne + numberTwo);
}