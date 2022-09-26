function toyShop(input) {
  let priceTrip = Number(input[0]);
  let puzzlePcs = Number(input[1]);
  let puppetsPcs = Number(input[2]);
  let teddybearPcs = Number(input[3]);
  let minonPcs = Number(input[4]);
  let truckPcs = Number(input[5]);
  let toysPcs = puzzlePcs + puppetsPcs + teddybearPcs + minonPcs + truckPcs;
  let toyPrice = puzzlePcs * 2.60 + puppetsPcs * 3 + teddybearPcs * 4.10 + minonPcs * 8.20 + truckPcs*2;
  let rentPrice  = 0.1;
  
if (toysPcs >= 50){
  toyPrice = (toyPrice * 0.75) ;
  toyPrice *=0.9;
} else{
  toyPrice *=0.9;
}
 
if (priceTrip <= toyPrice) {
console.log(`Yes! ${(toyPrice - priceTrip).toFixed(2)} lv left.`);
} else {
  console.log(`Not enough money! ${(priceTrip - toyPrice).toFixed(2)} lv needed.`)
}
    
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


