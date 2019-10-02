let rpsGame = function(userChoice) {

	let computerChoice = Math.random();

	if (computerChoice <= 0.33) {
		computerChoice = "rock";
	} else if (computerChoice <= 0.66) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}

	return compareChoices(userChoice, computerChoice);
}

const compareChoices = function(userChoice, computerChoice) {

	if (userChoice === computerChoice) {
		return "tie... you both chose " + userChoice;
	}

	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return "Computer won by wrapping your " + userChoice + " by its " + computerChoice;
		} else {
			return "You won by smashing computer's " + computerChoice + " by your " + userChoice;
		}
	}

	if (userChoice === "paper") {
		if (computerChoice === "rock") {
			return "You won by wrapping computer's " + computerChoice + " by your " + userChoice;
		} else {
			return "Computer won by cutting your " + userChoice + " by its " + computerChoice;
		}
	}

	if (userChoice === "scissors") {
		if (computerChoice === "paper") {
			return "You won by cutting computer's " + computerChoice + " by your " + userChoice;
		} else {
			return "computer won by smashing your " + userChoice + " by its " + computerChoice;
		}
	}
};