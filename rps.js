const rpslist = { 'rock' , ' paper ' , scissors'};
const user = ' rock ';
const rps = function (a) {
    const b = rpsList[math.floor(math.random() *3)];
    cosole.log("computer selected " + b);
    if (a === b)
return " tie"
if ((a== 'rock' && choisces [b] == 'scissors' ) || (a == 'sicssors' &&  choisces [b] == 'paper') || (a== 'paper' && choisces [b] == "rock)) {
    return" you win";

}
if ((b == 'rock' && choisces [a] == 'scissors' ) || (b == 'sicssors' && choisces [a] == 'paper') || (b == 'paper' && choisces [a] == "rock)) {
    return "lose";
}
return " game only accepts rock, paper, scissors";
}
cosole.log (playGame (' rock '))