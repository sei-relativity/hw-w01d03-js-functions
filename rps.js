let userOp = prompt("Rock, Paper, or Scissors");
 let compOp = Math.floor(Math.random()*3);

    if (compOp === 0) {returne = "Scissors";}
    if (compOp === 1)  {returne = "Paper";}
    if (compOp === 2)  {returne = "Rock";}

 let playGame = function(userOp,compOp){

     
    let  r = "Rock";
    let p = "Paper";
    let s = "Scissors";
    if(userOp === compOp){
       return "Tie";
    }else{
        if(userOp===r && compOp===s || userOp===p && compOp===r || userOp===s && compOp===p)
        {
           return "user Wins!";
        }else{
           return "computer Wins!";
        }
    }
};

playGame(1,2);