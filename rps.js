const playGame = function(pChoice){
    let result = ""
    const choices = ["rock", "paper", "scissors"]
    cChoice = Math.floor(Math.random()* 3);
    if(pChoice == choices[cChoice]) result = "tie";
    else if(pChoice == 'rock' && choices[cChoice] == 'scissors') result = "win";
    else if(pChoice == 'paper' && choices[cChoice] == 'rock') result = "win";
    else if(pChoice == 'scissors' && choices[cChoice] == 'paper') result = "win"; 
    else result = "lose";
    return "Computer picked "+choices[cChoice]+"\nUser picked "+pChoice+"\nUser "+result
}
console.log(playGame('rock'))