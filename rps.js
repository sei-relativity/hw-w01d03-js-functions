const rps = function (pMove) {
    let cMove = Math.floor(Math.random() * 3) + 1;
    if (cMove == 1) {
        cMove = "rock";
    } else if (cMove == 2) {
        cMove = "paper";
    } else if (cMove == 3) {
        cMove = "scissors";
    }

    console.log("You play " + pMove + ", Computer plays " + cMove);
    

    if ((pMove == "rock" && cMove == "scissors") || (pMove == "paper" && cMove == "rock") ||(pMove == "scissors")){
        return "player wins";
    } else if (pMove == cMove){
        return "It's a tie";
    } else {
        return "Computer wins";
    }   

}