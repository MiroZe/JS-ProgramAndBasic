function basketballEquipment(input){


let yearTax = Number(input[0]);
let sneackers = yearTax * 0.6;
let suit = sneackers * 0.8;
let balls = suit / 4;
let accessories = balls / 5;
let totalCosts = yearTax + sneackers + suit + balls + accessories;

console.log(totalCosts.toFixed(2));

}
basketballEquipment(["550"])