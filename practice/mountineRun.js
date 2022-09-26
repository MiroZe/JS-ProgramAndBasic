function mountainRun(input) {
  let recordInSecond = Number(input[0]);
  let distanceInMeters = Number(input[1]);
  let timeForSecondPerMeter = Number(input[2]);
    let resultInSeconds = distanceInMeters * timeForSecondPerMeter;
    let aditionalSeconds = (Math.floor(distanceInMeters / 50) * 30);
    let totalTime = resultInSeconds + aditionalSeconds;
    if(totalTime < recordInSecond){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else{
        console.log(`No! He was ${(totalTime - recordInSecond).toFixed(2)} seconds slower.`)
    }


}

mountainRun(["1377",
"389",
"3"])