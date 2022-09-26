function sumInSec(input){
const firstTime = Number(input[0]);
const secondTime = Number(input[1]);
const thirtTtime = Number(input[2]);
const totalTime = Number(firstTime + secondTime + thirtTtime);
let minute = Math.floor(totalTime / 60);
let second = totalTime % 60 ;
if (second < 10) {
    console.log(`${minute}:0${second}`);
} else {
    console.log(`${minute}:${second}`);
}



}

sumInSec([22,7,34])
