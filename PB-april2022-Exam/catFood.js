function catFood(input){
let index = 0;
let oneKgFoodPrice = 12.45;
let catPcs = Number(input[index]);
index++;
let eatenFood = 0;
let smallCatCounter = 0;
let bigCatCounter = 0;
let hugeCatCounter = 0;

for(let i = 0; i < catPcs; i++){
    let currentFood = Number(input[index]);
    index++
    
    if(currentFood >= 100 && currentFood < 200 ){
        smallCatCounter++;
        eatenFood+=currentFood
    } else if( currentFood >= 200 && currentFood < 300 ){
        bigCatCounter++;
        eatenFood+=currentFood;
    } else if(currentFood >= 300 && currentFood < 400){
        hugeCatCounter++;
        eatenFood+=currentFood
    }
}


let kgEatenFood = eatenFood / 1000;
let totalPrice = kgEatenFood * oneKgFoodPrice;
console.log(`Group 1: ${smallCatCounter} cats.`);
console.log(`Group 2: ${bigCatCounter} cats.`);
console.log(`Group 3: ${hugeCatCounter} cats.`);
console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);



}
catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])

