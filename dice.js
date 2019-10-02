const random = () => {
  return Math.round(Math.random() * 5 + 1);
};

const rollDice = (x = 2) => {
  let allDices = [];

  for (let i = 0; i < x; i++) {
    let randomNumber = random();
    allDices.push(randomNumber);
  }

  let allDicesString = allDices
    .slice(0, x - 1)
    .toString()
    .replace(/,/g, ", ");

  let lastNumber = allDices[allDices.length - 1];
  let sum = allDices.reduce((a, b) => a + b);

  allDicesString = allDicesString + `, and ` + lastNumber;

  console.log(`Dice rolled are ${allDicesString}. Sum is ${sum}`);
};

rollDice(8);
