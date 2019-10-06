let x = [10, 2, 15, -2,-10];
let New = [];
let length = 1; 
function Sum (x){
  for (let i = 0; i<x.length; i++){
    for (let l=0; l<length; l++){
if (x[i]<0){
 
New[0] += x[i];

}
if (x[i]>0){
 New[1] = console.count(x[i]); 
}

    }
  }
}
Sum(x);
console.log(New);


/////


let x = [10, 2, 15, -2,-10];
let New = [0,0];
let length = 1; 
function Sum (x){
  for (let i = 0; i<x.length; i++){
    for (let l=0; l<length; l++){
        if (x[i]<0){
          New[0] += x[i];
           }
        if (x[i]>0){
          New[1]++ // New[1] +=1 // New[1] = New; 
        }

    }
  }
}
Sum(x);
console.log(New);

///////
const countPsumN = function(arr){
   
   // to return a empty array;
    const result = [];
    if (!arr || arr.length === 0){
        return result
    }
    let count = 0;
    let sum = 0;
    for(let i =0; i < arr.length; i++){
        if (arr[i] > 0){
            count += 1;
        }else {
            sum += arr[i]
        }

}
result.push(count, sum)
return result

}
////
