function balls(input) {
  let index = 0;
  let ballPcs = Number(input[index]);
  index++;
  let totalPoints = 0;
  let redBallCounter = 0;
  let orangeBallCounter = 0;
  let yellowBallCounter = 0;
  let whiteBallCounter = 0;
  let otherBallCounter = 0;
  let blackBallCounter = 0;

  for (i = 0; i < ballPcs; i++) {
    let ballColour = input[index];
    index++;

    switch (ballColour) {
      case "red":
        totalPoints += 5;
        redBallCounter++;
        break;
      case "orange":
        totalPoints += 10;
        orangeBallCounter++;
        break;
      case "yellow":
        totalPoints += 15;
        yellowBallCounter++;
        break;
      case "white":
        totalPoints += 20;
        whiteBallCounter++;
        break;
      case "black":
        totalPoints = Math.floor(totalPoints / 2);
        blackBallCounter++;
        break;
      default:
        otherBallCounter++;
    }
  }

  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redBallCounter}`);
  console.log(`Orange balls: ${orangeBallCounter}`);
  console.log(`Yellow balls: ${yellowBallCounter}`);
  console.log(`White balls: ${whiteBallCounter}`);
  console.log(`Other colors picked: ${otherBallCounter}`);
  console.log(`Divides from black balls: ${blackBallCounter}`);
}
balls(["10", "white", "white", "ee", "red", "orange","red","black","black","black","black"]);
