

const play = function(choice){
    let comCoice = Math.floor((Math.random() * 3)+1);
if (comCoice == 1){
    comCoice = "rock";
}
else if (comCoice == 2){
    comCoice = "paper";
}
else {
    comCoice = "scissors";
}

    if (choice == comCoice){
        return "tie"
    }
    if (choice == "paper" && comCoice == "scissors"){
        return "computer wins"
    }
    if (choice == "rock" && comCoice == "scissors"){
        return  "user wins";
    }
    if (choice == "paper" && comCoice == "rock"){
        return  "user wins";
    }
    if (choice == "rock" && comCoice == "paper"){
        return  "computer wins";
    }
    if (choice == "scissors" && comCoice == "paper"){
        return  "user wins";
    }
    if (choice == "scissors" && comCoice == "rock"){
        return  "computer wins";
    }
    

}


