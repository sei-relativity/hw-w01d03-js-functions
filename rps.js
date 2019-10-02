let uc = ('rock', 'paper', 'scissors');
let cc = Math.random();
    cc = [cc >= .34 ("rock"), cc >= .67 ("scissors"), cc < .68  ("paper")];
let message = { 
  rock : { scissors : 'you win!', paper : 'you lose!'} ,
  paper : { rock : 'you win!', scissors : 'you lose!' },
  scissors : { paper : 'you win!', rock : 'you lose!' }
}
if ( cc === uc){
  console.log("It's a tie!"); 
}	 
else if ( uc !== "rock" && uc !== "paper" && uc !== "scissors" ){
  console.log("choose rock, paper or scissors");
}
else
  console.log('Computer picked: ' + cc + '. User picked: ' + uc + '. ' +  message) ;