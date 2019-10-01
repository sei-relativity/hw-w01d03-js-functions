const rollDice=function() { 
    num1=Math.floor(Math.random() * 6) + 1 ; 
    num2=Math.floor(Math.random() * 6) + 1 ;
    num3=num1+num2 ;  
    console.log("Diced Rolled are "+num1+" and "+num2+" Sum is "+num3) ; 
}
