function yardGreening(input) { 
let pricesqm = 7.61;
let discount = 0.18;
let totsqm = Number(input[0]);
let totalPrice = Number(totsqm * pricesqm);
let priceWithoutD = Number(totalPrice * discount)
let totalDiscount = Number(totalPrice - priceWithoutD)


console.log(`The final price is: ${totalDiscount} lv.`)
console.log(`The discount is: ${priceWithoutD} lv.`)
}
yardGreening([150])