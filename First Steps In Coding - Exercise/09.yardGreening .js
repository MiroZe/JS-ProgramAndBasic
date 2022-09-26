function yardGreening(input){
const areaInSqm = Number(input[0]);
let price = areaInSqm * 7.61
let priceWithDiscount = price * 0.18;
let totalPrice = price - priceWithDiscount;
console.log(`The final price is: ${totalPrice} lv.`);
console.log(`The discount is: ${priceWithDiscount} lv.`);


}
yardGreening(["150"])