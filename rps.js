
    rps.js
    let userChoice = prompt("please choose one from 'rock', 'paper','scissors'");
    let array =['paper', 'rock', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let compChoice = array[random] ;
    if (userChoice === compChoice){

        console.log("Tie") ;
        }
    else if (userChoice === 'paper' && compChoice === 'rock') {
        console.log("You Wine !") ;
    }
    else if (userChoice === 'rock' && compChoice === 'scissors'){
        console.log("You Wine!") ;
    }
    else if (userChoice === 'scissors' && compChoice === 'rock'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'rock' && compChoice === 'paper'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'paper' && compChoice === 'scissors'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'scissors' && compChoice === 'paper'){
        console.log("You Lose!") ;
    }
    else {console.log ("invalid input , try again ");
    }