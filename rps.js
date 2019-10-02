let gamePlay = function (userChoice) {
    let computerChoice = Math.floor((Math.random() * 3) + 1)
    if (computerChoice == 1) {
        computerChoice = "rock";
    } else if (computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    if (userChoice == computerChoice) {
        return "it is a tie";
    }

    if (userChoice == "rock" && computerChoice == "scissors") {
        return "User wins";
    }
    if (userChoice == "paper" && computerChoice == "scissors") {
        return "Computer wins";
    }
    if (userChoice == "paper" && computerChoice == "rock") {
        return "user wins";
    }
    if (userChoice == "rock" && computerChoice == "paper") {
        return "computer wins";
    }
    if (userChoice == "scissors" && computerChoice == "paper") {
        return "user wins";
    }
    if (userChoice == "scissors" && computerChoice == "rock") {
        return "computer wins";
    }
}

console.log(gamePlay("rock"));
console.log(gamePlay("paper"));
console.log(gamePlay("scissors"));