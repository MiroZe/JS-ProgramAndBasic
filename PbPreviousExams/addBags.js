function addBags (input){
 let priceOver20 = Number(input[0]);
 let kilograms = Number(input[1]);
 let estimatedDays = Number(input[2]);
 let bagagePcs = Number(input[3]);
 let totalPrice =0;

 if (kilograms < 10){
    totalPrice = bagagePcs * priceOver20 * 0.2;
    
}else if(kilograms >= 10 && kilograms <= 20){
    totalPrice = bagagePcs * priceOver20 * 0.5;
}else {
    totalPrice = bagagePcs * priceOver20
}
if (estimatedDays < 7 ){
    totalPrice *= 1.4;
}else if(estimatedDays >=7 && estimatedDays <= 30){
    totalPrice *= 1.15;
}else{
    totalPrice *=1.1;
}

console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `)


}
addBags(["63.80",
"23",
"3",
"1"])




