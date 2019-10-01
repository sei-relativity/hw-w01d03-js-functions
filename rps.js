var myChoice = prompt("Enter your choice (Scissors, Paper or Rock - without string markers)");

var gameOfScissorsPaperRock = function(myChoice) {

    myChoice = this.myChoice;

    var opponentChoice;
    var win = "You win.";
    var lose = "You lose.";

    var randomnumber = Math.floor(Math.random()*3);

    if (randomnumber === 0) opponentChoice = "Scissors";
    if (randomnumber === 1) opponentChoice = "Paper";
    if (randomnumber === 2) opponentChoice = "Rock";

    console.log("Your choice: " + myChoice + ". Opponent's choice: " + opponentChoice       + "." )

    if (myChoice == opponentChoice) console.log("It's a draw.");

    else if ((myChoice == "Scissors" && opponentChoice == "Paper")||
    (myChoice == "Paper" && opponentChoice == "Rock") ||
    (myChoice == "Rock" && opponentChoice == "Scissors")) return win;


        else return lose;
};

gameOfScissorsPaperRock("myChoice");