const rollDic = function (){
    num1 = Math.floor(Math.random() *6) +1;
    num2 = Math.floor(Math.random() *6) +1;
    num3=num1+num2 ;
    console.log("Diced Rolled are " +num1+ " and " + num2 +"sum is "+num3);

}

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