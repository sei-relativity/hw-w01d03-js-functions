const rollDice = function(){
    let diceOne = Math.floor((Math.random() * 6) + 1 );
    let diceTwo = Math.floor((Math.random() * 6) + 1 );
    let sum = diceOne + diceTwo;
    
    return "Dice rolled are "+diceOne+ " and "+diceTwo+" and Sum is "+sum; 
}
