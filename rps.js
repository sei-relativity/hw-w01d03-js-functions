
//  Sager Alarifi

//  Rock, Paper, Scissors
const playGame = function (rpsPlayer) {
    let rpsComp = getRandomChoice();
    let outCome = getOutcome(rpsPlayer, rpsComp);
    //  return results as a string
    return ("Computer picked: " + rpsComp + ". User picked: " + rpsPlayer + ". User " + outCome + ".");
}

//  assign a random choice of (rock, paper, scissors) to the computer
const getRandomChoice = function () {
    let randomInt = Math.floor(Math.random() * Math.floor(3));
    if (randomInt == 0)
        return "rock";
    if (randomInt == 1)
        return "paper";
    if (randomInt == 2)
        return "scissors";
}

//  Compare choices and get outcome
const getOutcome = function (player, comp) {
    if (player == comp)
        return "tie"
    else if (((player == "rock") && (comp == "scissors")) || ((player == "paper")
        && (comp == "rock")) || ((player == "scissors") && (comp == "paper")))
        return "win"
    else return "lose"
}