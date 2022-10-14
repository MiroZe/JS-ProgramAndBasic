function godzillaVsKong(input){

let budget = Number(input[0]);
let statists = Number(input[1]);
let priceForClothes = Number(input[2]);
let priceForDecor = budget * 0.10;

let totalGarmentPrice = statists * priceForClothes;

if(statists > 150){
    totalGarmentPrice *= 0.9;

}

let totalCosts = priceForDecor + totalGarmentPrice;
let diff = Math.abs(totalCosts - budget);
if( budget >= totalCosts){
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
} else{
    console.log("Not enough money!")
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);

}

}
godzillaVsKong(["9587.88",
"222",
"55.68"])


