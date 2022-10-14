function oscarsCeremony (input){
 let rentPrice = Number(input[0]);
 let statuettes = rentPrice *0.7;
 let catering = statuettes * 0.85;
 let sound = catering / 2;
 let totalPrice = statuettes + catering + sound + rentPrice
console.log(totalPrice.toFixed(2));







}

oscarsCeremony(["3500"])