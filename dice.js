const rollDice = function (rolling) {

    for (let i = 0; i < rolling; i++) {

        const numberOne = Math.floor(Math.random() * 6) + 1;

        const numberTwo = Math.floor(Math.random() * 6) + 1;

        const sum = numberOne + numberTwo;

        console.log("Dice rolled are " + (i + 1) + " ," + numberOne + ", and " + numberTwo + ". Sum is " + sum);
    }
};