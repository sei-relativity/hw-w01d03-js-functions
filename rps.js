// Rock, Paper, Scissors
const play = function (User_Choosed) {
    /*if (!(User_Choosed !="rock" ||User_Choosed!="paper"||User_Choosed !="scissors")){
        return "your choice is not correct"    
    }
    */
    let temp_array = ["rock", "paper", "scissors"]
    if (!(temp_array.includes(User_Choosed))) {
        return "your choice is not correct"
    }

    let random_choice = Math.floor(Math.random() * 3);
        console.log("computer choice is "+temp_array[random_choice])

    if (!temp_array[random_choice] ){
        console.log(random_choice)
        return "error"
}
    if (temp_array[random_choice] == User_Choosed)
        return "It's a tie!";


    if (User_Choosed == "rock") {
        if (temp_array[random_choice] == "scissors")
            return "you win!"
        else
            return "you lose !"
    }

    if (User_Choosed == "paper") {
        if (temp_array[random_choice] == "rock")
            return "you win!"
        else
            return "you lose !"
    }
    if (User_Choosed == "scissors") {
        if (temp_array[random_choice] == "paper")
            return "you win!"
        else
            return "you lose !"
    }

}