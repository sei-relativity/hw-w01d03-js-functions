
const twoRandom = function(){
    const random1 = Math.floor((Math.random() * 6) + 1);
    const random2 = Math.floor((Math.random() * 6) + 1);
    return random1 + random2 ;
}

twoRandom();


--------------------------------
//this is bouns question

const twoRandom = function(rolled){
    const random = Math.floor((Math.random() * rolled) + 1);
    for (let i =0; i < rolled; i++){
        console.log( random );
    }

}
twoRandom(3);

