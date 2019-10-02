const rpsGame = function (user) {

    let gameList = ["rock", "paper", "scissors"]
    let mChoose = gameList[
        Math.floor(Math.random()*(gameList.length))
     ];
  
  
    if(user === mChoose){
      return "tie";
    }
  
    if(user == "rock"){
      if(mChoose == "scissors")
        return "loose"
      else 
        return "win";
    }
  
    if(user == "paper"){
      if(mChoose == "scissors")
        return "win"
      else 
        return "loose";
    }
  
    if(user == "paper"){
      if(mChoose == "rock")
        return "win"
      else 
        return "loose";
    }
  
  }
  
  console.log(rpsGame())