//noura khaled
// JS Functions HW

function myFunction(userChoice) 
{
var computerChoices = ["rock", "paper", "scissors"];
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  console.log("Computer:" + " " + computerChoice);
    var compare = function (choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        };
        // Run the compare function
        var results = compare(userChoice,computerChoice);
        // Display results

        console.log(results);
}
myFunction();