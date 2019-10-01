let choice = prompt("Please choose one from 'rock','paper','scissors'"); 
let array=['paper','rock','scissors'] ; 
let random=Math.floor(Math.random() * 3); 
let compChoice=array[random] ; 

if (choice === compChoice) {
console.log("Tie") ; } 
else if (choice === 'paper' && compChoice ==='rock' ) {
    console.log("You Win !") ; 
} 
else if (choice === 'rock'=== compChoice==='scissors') {
    console.log("You Win !") ; 

}
else if (choice === 'scissors'=== compChoice==='rock') {
    console.log("You Lose !") ; 
    
}
else if (choice === 'rock'=== compChoice==='paper') {
    console.log("You Lose !") ; 
    
}
else if (choice === 'paper'=== compChoice==='scissors') {
    console.log("You Lose !") ; 
    
}
else if (choice === 'scissors'=== compChoice==='paper') {
    console.log("You Lose !") ; 
    
}
else { console.log("Invalid input , try again" ) ; 
}