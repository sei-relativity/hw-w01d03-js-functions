const rpsList = ['rock', 'paper', 'scissors'];
const user = 'rock';
const rps = function (a) {
    const b = rpsList[Math.floor(Math.random() * 3)];
    console.log("computer selected " + b);
    if (a === b)
        return "tie"
    if ((a == 'rock' && b == 'scissors') || (a == 'scissors' && b == 'paper') || (a == "paper" && b == "rock")) {
        return "win";
    }
    if ((b == 'rock' && a == 'scissors') || (b == 'scissors' && a == 'paper') || (b == "paper" && a == "rock")) {
        return "lose";
    }
    return "Game only accepts rock, paper, and scissors";
}
console.log("User selected " + user);
console.log(rps(user));