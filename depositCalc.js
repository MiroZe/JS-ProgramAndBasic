function depositCalc(input){

let depsum = Number(input[0]);
let period = Number(input[1]);
let interestRate = Number(input[2]/100);
let finalsum = Number(depsum + (period*(depsum * interestRate)/12));




console.log(finalsum)
}
depositCalc([2350,6,7])