function timePlus15Min(input){
const currentHr = Number(input[0]);
const currentMnts = Number(input[1]);
let minutesPlus15 = Number(currentMnts + 15);
let currentHrPlus = 0
let totalMinutesPlus = currentHr * 60 + minutesPlus15
let totalHrsPlus = Math.floor(totalMinutesPlus / 60)
let currentMinutesPlus = totalMinutesPlus % 60
if (totalHrsPlus > 23){
    totalHrsPlus = totalHrsPlus - 24
}
if (currentMinutesPlus < 10) {
    console.log(`${totalHrsPlus}:0${currentMinutesPlus}`)
} else {
    console.log(`${totalHrsPlus}:${currentMinutesPlus}`)
}


}



timePlus15Min([23,45])