// Roll dice
const rollDice = function(roll) {
    let i =0;
    let random_num=[]

    while (i<=roll){
        random_num[i]=Math.floor(Math.random() * 6) + 1;
        i++
    }
    const add = (a, b) => a + b
    const sum = random_num.reduce(add)

    return   [random_num,sum]
}
