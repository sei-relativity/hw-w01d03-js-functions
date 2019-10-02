
const rps = function(userChoice){
    let computerChoice = Math.random();
    if(computerChoice < 0.40){
         computerChoice= "rock";
    }
    else if( 0.41< computerChoice < 0.90){
         computerChoice= "paper";
    }
    else{
         computerChoice= "scissors"
    }

    if(computerChoice == "rock" && userChoice == "rock" ||  computerChoice =="paper" && userChoice == "paper" || computerChoice =="scissors" && userChoice =="scissors" ){
    return "tie";}
    
    else if(computerChoice == "paper" && userChoice == "rock" ||  computerChoice =="scissors" && userChoice == "paper"){
        return "lose";
    }
    else{
        return "win";
        }
    }