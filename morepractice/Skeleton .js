function Skeleton (input) {
  let minutesAtControl = Number(input[0]);
  let secondsAtControl = Number(input[1]);
  let lengthInMeters = Number(input[2]);
  let secondsFor100Meters = Number(input[3]);
  let controlTimeInSeconds = minutesAtControl * 60 + secondsAtControl
  let playerTime = lengthInMeters /100 * secondsFor100Meters
  let delayInSeconds = lengthInMeters / 120 * 2.5 ;
  let realTime = playerTime - delayInSeconds;
  if (realTime <= controlTimeInSeconds){
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${realTime.toFixed(3)}.`)
  } else{
    console.log(`No, Marin failed! He was ${(realTime - controlTimeInSeconds).toFixed(3)} second slower.`)
  }




}
Skeleton (["2",
"12",
"1200",
"10"])