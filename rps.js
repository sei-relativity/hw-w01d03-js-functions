const playGame = function (name) {

    let playOptionsArray = ["rock", "paper", "scissors"]
    let computerChoice = playOptionsArray[
        Math.floor(Math.random()*(playOptionsArray.length))
     ];

    if(name == computerChoice) {
        return "Tie!"
    }

    if(name === "rock") {
        if(computerChoice === "scissors") {
            return "Win!";
        } else {
            return "Lose";
        }
    }
       
    if(name == "paper") {
        if(computerChoice == "rock") {
            return "Win!"
        } else {
            return "Lose"
        }
    }

    if (name == "scissors") {
        if(computerChoice == "rock") {
            return "lose!"
        } else {
            return "win!"
        }
    }

}
