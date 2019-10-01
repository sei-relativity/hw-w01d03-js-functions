const rollDice = function(max){
    let result = "Dice rolled are "
    let sum = 0
    for(let i = 0; i <= max; i++ ){
        num = Math.floor(Math.random() * 6) + 1
        sum += num
        result +=  num +", "
    }
    return result + "Sum is "+ sum
}
console.log(rollDice(5))

