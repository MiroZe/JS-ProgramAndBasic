function easterBakery(input){
let flourPrice = Number(input[0]);
let flourKgs = Number(input[1]);
let sugarKgs = Number(input[2]);
let eggPcs = Number(input[3]);
let yeastPcs = Number(input[4]);
let sugarPrice = flourPrice * 0.75;
let eggPrice = flourPrice * 1.1;
let yeastPrice = sugarPrice * 0.2;
let sum = flourPrice * flourKgs + sugarKgs * sugarPrice + eggPcs * eggPrice + yeastPrice * yeastPcs


console.log(sum.toFixed(2));


}
easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])