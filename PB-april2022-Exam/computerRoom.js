function computerRoom(input){
 
let month = input[0];
let hours = Number(input[1]);
let people = Number(input[2]);
let timeOfDay = input[3];
let priceForOne = 0;

switch(month){
    case "march":
    case "april":
    case "may" :
        switch(timeOfDay){
            case "day" : priceForOne = 10.50 ;break;
            case "night" : priceForOne = 8.40;break;
        }break;
    case "june":
    case "july":
    case "august" :
        switch(timeOfDay){
            case "day" : priceForOne = 12.60 ;break;
            case "night" : priceForOne = 10.20 ;break;
        }break;
}
if(people >= 4){
    priceForOne *= 0.9;
}
if(hours >= 5){
    priceForOne *= 0.5;
}
let totalPrice = priceForOne * people * hours;

console.log(`Price per person for one hour: ${priceForOne.toFixed(2)}`);
console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);

}
computerRoom(["july",
"5",
"5",
"night"])

