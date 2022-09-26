function puppyCare(input){

    let index = 0;
    let boughtFoodinKg = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let eatenFood = 0;

    while( command !== "Adopted"){
        let currentFood = Number(command)
        eatenFood += currentFood
        command = input[index];
        index++;
    }
let boughtFoodinGrams = boughtFoodinKg * 1000;
let diff = Math.abs(boughtFoodinGrams - eatenFood);
if( boughtFoodinGrams >= eatenFood){
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
} else{
    console.log(`Food is not enough. You need ${diff} grams more.`);
}



}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])

