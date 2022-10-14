function fruitMarket(input){

    let strawberryPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let rasberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);
    let rasberriesPrice = strawberryPrice * 0.5;
    let orangesPrice = rasberriesPrice * 0.6;
    let bananasPrice  = rasberriesPrice * 0.2;
    let totalPrice = strawberriesQuantity * strawberryPrice + orangesPrice * orangesQuantity + bananasPrice * bananasQuantity + rasberriesPrice * rasberriesQuantity;
    
    console.log(totalPrice.toFixed(2));

}
fruitMarket(["63.50","3.57","6.35","8.15","2.50"])
    