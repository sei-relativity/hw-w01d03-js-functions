let myChoice = prompt("Enter your choice (Scissors, Paper or Rock )");
let playGame = function(myChoice) {
   myChoice = this.myChoice;
   let opponentChoice;
   let win = "You win.";
   let lose = "You lose.";
   let tie = "You tie. "
   let randomnumber = Math.floor(Math.random()*3);
   if (randomnumber === 0) opponentChoice = "Scissors";
   if (randomnumber === 1) opponentChoice = "Paper";
   if (randomnumber === 2) opponentChoice = "Rock";
   console.log("Your choice: " + myChoice + ". Opponent's choice: " + opponentChoice       + "." )
   if (myChoice == opponentChoice) console.log("It's a draw.");
        else if ((myChoice == "Scissors" && opponentChoice == "Paper")||
   (myChoice == "Paper" && opponentChoice == "Rock") ||
   (myChoice == "Rock" && opponentChoice == "Scissors")) return win;
        else if ((myChoice == "Scissors" && opponentChoice == "Scissors")||
   (myChoice == "Paper" && opponentChoice == "Paper") ||
   (myChoice == "Rock" && opponentChoice == "Rock")) return tie;
        else return lose;
};
playGame("myChoice");