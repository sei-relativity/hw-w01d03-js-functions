const rollDice = function (numbRolls) {
    if (!numbRolls)
        numbRolls = 2;
    let sum = 0;
    let rollVal = 0;
    let output = "Dice rolled ";

    // Special case of one die rolled
    if (numbRolls == 1) {
        rollVal = getRandomRoll();
        sum += rollVal;
        output += "is " + rollVal + ". Sum is " + sum + ".";
    }
    //  Two dice rolled
    else if (numbRolls == 2) {
        rollVal = getRandomRoll();
        sum += rollVal;
        output += "are " + rollVal;
        rollVal = getRandomRoll();
        sum += rollVal;
        output += " and " + rollVal + ". Sum is " + sum + ".";
    }
    //  More than two dice rolled
    else if (numbRolls > 2) {
        output += "are ";
        for (i = 0; i < numbRolls; i++) {
            rollVal = getRandomRoll();
            sum += rollVal;

            //  special case of the last die roll to add "and"
            if (i == (numbRolls - 1)) {
                output += "and " + rollVal;
            } else {
                output += rollVal + ", ";
            }
        }
        output += ". Sum is " + sum + ".";
    }

    //  display the output
    console.log(output);
}

//  get a random roll function
const getRandomRoll = function () {
    return randomInt = Math.floor(Math.random() * Math.floor(6)) + 1;
}