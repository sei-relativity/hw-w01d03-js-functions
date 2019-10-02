
const twoRandom = function(){
    const random1 = Math.floor((Math.random() * 6) + 1);
    const random2 = Math.floor((Math.random() * 6) + 1);
    return random1 + random2 ;
}

twoRandom();


--------------------------------
//this is bouns question

const twoRandom = function(rolled){
    let sum =0;
    for (let i =0; i < rolled; i++){
        const random = Math.floor((Math.random() * rolled) + 1);
		console.log(random);
        sum += random;
    }
	return sum;
}
twoRandom(3);

