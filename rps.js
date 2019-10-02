var userChoice = prompt("Do you choose rock , paper or scissors?");
var computerChoice = Math.randome();
 if (computerChoice<0.34 ){
     computerChoice="rock";
 } else if (computerChoice<=0.67){
     computerChoice="paper";
 }else{computerChoice="scissors"};
 var compare = function (choice1 , choice2){
     if (choice1 === choice2){
         return "the result is tie";
     }
     if (choice1 === "rock"){
         if (choice2 === "scissors"){
             return "rock wins";
         }else {
             return " paper wins";
         }
     }
 }
     if (choice1==="paper"){
         if(choice2==="rock"){
             return"paper wins";
         }else {
             if (choice2 ==="scissors"){
                 return"scissors win";
             }
         }
     }
     if (choice1==="scissors"){
         if (choice2==="rock"){
             return"rock wins";
         }else{
             if (choice2 ==="paper"){
                 return "scissors wins";
             }
         }
     }
     // Reserch for 3 string method:
     // 1- Name: length
    //  1- Description: prperty return the length of a string.
    //  1- example: var txt = "ASDFGHJKL"
    //                txt.length= 9;
    // 
    //  2- Name: Finding string inside a string
    //  2- Description: index of() method returns the index of the position of the first occurrence of a specified text in a string.
    //  2- example: var str = " please locate where 'locate' occure"
    //  2-          var pos = str.indexof("locate")
    //
    //  3- Name: searching for a string in a string
    //  3- Description: the search() method search a string for a specified value and return the position of the match
    //  3- example: var str = "please locate where 'locate' occure"
    //               var pos = str.search("locate")
    