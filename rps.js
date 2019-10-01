array = ['rock', 'paper', 'scissors']
const playGame = function(choice) {
    let comChoice = array[Math.floor(Math.random() * 2)]
    if (comChoice === choice) {
        return 'it\'s a tie'
    } else {

        switch (choice) {
            case 'rock':
                if (comChoice === 'paper') { return 'I win' } else { return 'You win' }
                break;
            case 'paper':
                if (comChoice === 'scissors') { return 'I win' } else { return 'You win' }
                break;
            case 'scissors':
                if (comChoice === 'rock') { return 'I win' } else { return 'You win' }
                break;
            default:
                return 'COMON IS THIS YOUR FIRST TIME PLAYING THIS GAME';
        }
    }

}
console.log(playGame('rock'))
console.log(playGame('scissors'))
console.log(playGame('paper'))
console.log(playGame('hi'))