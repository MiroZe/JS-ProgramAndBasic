function familyTrip(input){
    
let budget = Number(input[0]);
let nights = Number(input[1]);
let priceForOneNight = Number(input[2]);
let percentAdditionalCosts = Number(input[3]);
if ( nights > 7){
priceForOneNight = priceForOneNight * 0.95;
}
let additionalCosts = (budget * (percentAdditionalCosts/100));
let totalSum = priceForOneNight * nights + additionalCosts;
if (budget >= totalSum){
   console.log(`Ivanovi will be left with ${(budget - totalSum).toFixed(2)} leva after vacation.`);
} else{
    console.log(`${(totalSum - budget).toFixed(2)} leva needed.`); 
}

}
familyTrip(["500","7","66","15"])