//noura khaled
// JS Functions HW
function rollDice(Dice) 
{
var Dice = [1,2,3,4,5,6];
var Choice1 = Dice[Math.floor(Math.random() * Dice.length)];
var Choice2 = Dice[Math.floor(Math.random() * Dice.length)];
  
  console.log("Dice rolled are "+ Choice1 +" and " + Choice2 + ". Sum is "+ (Choice1+Choice2));

  // BONUS
  var Choice3 = Dice[Math.floor(Math.random() * Dice.length)];
  console.log("Dice rolled are "+ Choice1 +" , " + Choice2 + " and "+ Choice3 + ". Sum is "+ (Choice1+Choice2+Choice3));
}
  rollDice();