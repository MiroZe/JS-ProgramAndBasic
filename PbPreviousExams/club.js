function club(input){
let index = 0;
let neededProfit = Number(input[index]);
index++;
let command = input[index];
index++
let sum = 0;
let isDone = false;

while(command !== "Party!"){
    let coctailName = command ;
    let coctailPrice = Number(coctailName.length);
    let coctailOrders = Number(input[index]);
    index++;
    let priceOfOrder = coctailPrice * coctailOrders;
    if((priceOfOrder % 2) !== 0){
        priceOfOrder *=0.75;
    }
    sum += priceOfOrder;
    if(sum >= neededProfit){
        isDone = true;
        console.log("Target acquired.")
        console.log(`Club income - ${sum.toFixed(2)} leva.`);
        break;
    }
    command = input[index];
    index++
}
if(!isDone){
    let diff = Math.abs(neededProfit - sum);
    console.log(`We need ${diff.toFixed(2)} leva more.`);
    console.log(`Club income - ${sum.toFixed(2)} leva.`)
 
}

}
club(["100","Sidecar","7","Mojito","5","White Russian","10"])