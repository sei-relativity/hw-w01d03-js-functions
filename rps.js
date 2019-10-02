
let cmChoice = Math.random();

const game = function(user){
if (cmChoice < 0.33) {
    cmChoice = "rock";
}
else if( cmChoice > 0.66) { 
    cmChoice = "scissors";
}
else {
    cmChoice = "paper"
}
if (playGame) {
    let user = "rock"
} return cmChoice
}
const choices = function(cmChoice, user) {
    if (cmChoice === user) 
    return "Tie!";
}
    else if (cmChoice === "rock") {
        if ( user === "scissors") {
            return " You won !";
        }
        else {
            return " Computer Won ! ";
        }

        else if (cmChoice === "paper") {
            if( user=== "rock") {
                return " You won !"
            }
            else { 
                return " Sorry You lost"
            }

        }
        else if (cmChoice === "scissors"){
        if ( user=== "rock") {
            return "you wim, computer lost!"
        } 
        else { 
            return "computer wins"
        }
        }
}

