const rollDice =function() {
    let num1 = Math.floor((Math.random() * 6) + 1);
    let num2 = Math.floor((Math.random() * 6) + 1);
    let sum = num1 + num2;
    let message = "Dice rolled " + num1 + ", " + num2 + ". Sum is " + sum;
    return message;
}