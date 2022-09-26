function bills(input){
let index = 0;
let months = Number(input[index]);
index++;
let electricityBills = 0;
let waterBillsperMonth = 20;
let internetBillsPerMonth = 15;


for(let i = 0; i < months ; i++){
    let currentElectricity = Number (input[index]);
    index++;
    electricityBills += currentElectricity
    
}
let otherBills = (electricityBills + waterBillsperMonth + internetBillsPerMonth) * 0.2 + (electricityBills + waterBillsperMonth+internetBillsPerMonth);
let totalWater = months * waterBillsperMonth;
let totalInternet = months * internetBillsPerMonth;
let totalElectricity = electricityBills
let totalOtherBills = months * otherBills
let totalBills = (totalElectricity + totalWater + totalInternet ) + (totalElectricity + totalWater + totalInternet) * 0.2
console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
console.log(`Water: ${totalWater.toFixed(2)} lv`);
console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
console.log(`Other: ${totalBills.toFixed(2)} lv`);
let avgBills = (totalBills + totalElectricity + totalInternet + totalWater) / months;
console.log(`Average: ${avgBills.toFixed(2)} lv`);


}
bills(["8","123.54" ,"231.54","140.23","100","122.40","430","178.52","64.20"])
