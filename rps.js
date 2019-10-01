
let game = function( player){
    let computer =Math.floor((Math.random() * 3) + 1);
    if (computer ===1) {
        computer = "rock";
    }
    else if (computer === 2) {
          computer = "paper";
    }
    else{  computer = "scissors"; }
    if (player === computer){
        console.log("Tie!");
        }else if (player === 'paper' && computer === 'rock'){
        console.log("You win!");
        }else if (player === 'rock' && computer === 'scissors'){
        console.log("You win!");
        }else if (player === 'scissors' && computer === 'rock'){
        console.log("You lose!");
        }else if (player === 'rock' && computer === 'paper'){
        console.log("You lose!");
        }else if (player === 'paper' && computer === 'scissors'){
        console.log("You lose!");
        }else if (player === 'scissors' || computer === 'paper'){
        console.log("You win!");
        }else{
        console.log("Invalid input, please try again");
        }


}

game(1,Computer);


