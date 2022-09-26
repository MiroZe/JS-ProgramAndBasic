function squareFrame(input) {
  let userNumber = Number(input[0]);
  let topRow = "+";

  for (let row = 1; row <= userNumber - 2; row++) {
    topRow += " -";
  }
  topRow += " +";
  console.log(topRow);
  for (let mid = 0; mid < userNumber - 2; mid++) {
    let middleRow = "|";
    for (let m = 0; m < userNumber - 2; m++) {
      middleRow += " -";
    }
    middleRow += " |";
    console.log(middleRow);
  }
  let bootomRow = "+";
  for (let bot = 0; bot < userNumber - 2; bot++) {
    bootomRow += " -";
  }
  bootomRow += " +";
  console.log(bootomRow);
}
squareFrame(["6"]);
