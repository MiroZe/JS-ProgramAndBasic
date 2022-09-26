function catWalking(input){
let minuteWalkingPerDay = Number(input[0]);
let pcsOfWakingPerDay = Number(input[1]);
let addedCaloriesPerDay = Number(input[2]);
let totalWalkingMinutes = minuteWalkingPerDay * pcsOfWakingPerDay;
let burnedCalories = totalWalkingMinutes * 5;
if (burnedCalories >= (addedCaloriesPerDay / 2)){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`)

}else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`)
}



}
catWalking(["15",
"2",
"500"])