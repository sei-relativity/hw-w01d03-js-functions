const game = function(userChoice) {

    let compChoice = Math.random();
    if (compChoice < 0.30){
     compChoice = "rock";
    } else if (compChoice <= 0.70){
     compChoice= "paper";
    }
    else { 
     compChoice = "scissors" ;
    }
    
    
    if (userChoice == "rock" && compChoice == "rock" || userChoice == "paper" && compChoice == "paper" || userChoice == "scissors" && compChoice == "scissors") {
    return "Tie"; }
    
    else if (userChoice == "rock" && compChoice == "paper" || userChoice == "paper" && compChoice == "scissors"){
    return "User loose" ; }
      
    else {
        return "User Win" ;
    }
}