const rollDice = function (rolling) {
    for (let i = 0; i < rolling; i++) {
        const num1 = Math.floor(Math.random() * 6) + 1;
        const num2 = Math.floor(Math.random() * 6) + 1;
        const sum = num1 + num2;
        console.log("Dice rolled are " + (i+1) +" ,"+  num1 + ", and " + num2 + ". Sum is " + sum);
    }
}
