function repainting(input){
const nylon = 1.50;
const paint = 14.50;
const razr = 5;
const totalNylon = Number(input[0] * nylon + 2 * nylon);
const sumOfPaint = Number(input[1] * paint );
const additionalPaint = Number (sumOfPaint + sumOfPaint * 10 / 100);
const sumOfRazr = Number(input[2] * razr);
const sumOfBags = 0.40;
let totalSum = Number(additionalPaint + sumOfRazr + totalNylon + sumOfBags)
let services = Number(totalSum  * 30 / 100);
let totalServices = Number(input[3] * services);
let totalPayment = Number(totalSum + totalServices);



console.log(totalPayment)

}


repainting([5,10,10,1])