const rollDice = function(num = 2) {
    if (num < 1) { num = 2 }
    const num1 = Math.floor(Math.random() * 5) + 1
    console.log(num1)
    if (num <= 1) {
        return num1
    } else {
        return (rollDice(num - 1) + num1)
    }
}

console.log(rollDice(3))
console.log(rollDice())
console.log(rollDice(0))
console.log(rollDice(5))