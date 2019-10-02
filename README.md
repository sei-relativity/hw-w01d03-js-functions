[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Functions HW

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Create and checkout a new branch, named `response`.
1. When finished, `git add`, `git commit`, `git push` to your fork and submit a pull request.

## Questions

1. [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) ([watch the game](https://www.youtube.com/watch?v=JtcHmiAcbZc))
    - Create a file in this repo named `rps.js`
    - Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choice, then chooses `rock`, `paper`, or `scissors` randomly for the computer choice, and returns whether the user `win`, `lose`, or `tie`.
    - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    - _**Hint:** Javascript includes a `Math.random` method._

    rps.js
    let userChoice = prompt("please choose one from 'rock', 'paper','scissors'");
    let array =['paper', 'rock', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let compChoice = array[random] ;
    if (userChoice === compChoice){

        console.log("Tie") ;
        }
    else if (userChoice === 'paper' && compChoice === 'rock') {
        console.log("You Wine !") ;
    }
    else if (userChoice === 'rock' && compChoice === 'scissors'){
        console.log("You Wine!") ;
    }
    else if (userChoice === 'scissors' && compChoice === 'rock'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'rock' && compChoice === 'paper'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'paper' && compChoice === 'scissors'){
        console.log("You Lose!") ;
    }
    else if (userChoice === 'scissors' && compChoice === 'paper'){
        console.log("You Lose!") ;
    }
    else {console.log ("invalid input , try again ");
    }

2. Dice Roller
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
 const rollDic = function (){
     num1 = Math.floor(Math.random() *6) +1;
     num2 = Math.floor(Math.random() *6) +1;
     num3=num1+num2 ;
     console.log("Diced Rolled are " +num1+ " and " + num2 +"sum is "+num3);

 }

3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: replace() 
Description: replaces a specified value with another value in a string
Example using it: str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools")
```

Method 2
```
Name: trim()
Description: removes whitespace from both sides of a string
Example using it: var str = "       Hello World!        ";
alert(str.trim());
```

Method 3
```
Name: search()  
Description: searches a string for a specified value and returns the position of the match
Example using it: var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
