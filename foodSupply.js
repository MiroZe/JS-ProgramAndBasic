function foodSupply(input){

const chickenMenu = 10.35;
const fishMenu = 12.40;
const vegetMenu = 8.15;
const shipping = 2.50;
const chickenMenuSum = Number(input[0] * chickenMenu);
const fishMenuSum = Number(input[1] * fishMenu);
const vegetMenuSum = Number(input[2] * vegetMenu);
const desert = Number((chickenMenuSum + fishMenuSum + vegetMenuSum) * 20 / 100);
let totalSum = Number(chickenMenuSum + fishMenuSum + vegetMenuSum + desert + shipping);


console.log(totalSum)


}
foodSupply([9,2,6])