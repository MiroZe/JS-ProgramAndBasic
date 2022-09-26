function averageNumber(input){
let index = 0;
let command = Number(input[index]);
index++;
let sum = 0;

while(index <= command){
    let currentNumber = Number(input[index]);
    index++;
    sum += currentNumber
    

      
}

let avgSum = sum / command;
console.log(avgSum.toFixed(2));

}
averageNumber(["2","6","4"])
