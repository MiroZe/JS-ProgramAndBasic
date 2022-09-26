function gameOfIntervals(input) {
  let index = 0;
  let turns = Number(input[index]);
  index++;
  let score = 0;
  let to9Number = 0;
  let to19Number = 0;
  let to29Number = 0;
  let to39Number = 0;
  let to50Number = 0;
  let invalidNumber = 0;

  for (let i = 0; i < turns; i++) {
    let currentNumber = Number(input[index]);
    index++;
    if (currentNumber >= 0 && currentNumber <= 9) {
      score += currentNumber * 0.2;
      to9Number++;
    } else if (currentNumber >= 10 && currentNumber <= 19) {
      score += currentNumber * 0.3;
      to19Number++;
    } else if (currentNumber >= 20 && currentNumber <= 29) {
      score += currentNumber * 0.4;
      to29Number++;
    } else if (currentNumber >= 30 && currentNumber <= 39) {
      score += 50;
      to39Number++;
    } else if (currentNumber >= 40 && currentNumber <= 50) {
      to50Number++;
      score += 100;
    } else if (currentNumber < 0 || currentNumber > 50) {
      score = score / 2;
      invalidNumber++;
    }
  }
  console.log(score.toFixed(2));
  let to9P = (to9Number / turns) * 100;
  let to19P = (to19Number / turns) * 100;
  let to29P = (to29Number / turns) * 100;
  let to39P = (to39Number / turns) * 100;
  let to50P = (to50Number / turns) * 100;
  let invalidP = (invalidNumber / turns) * 100;
  console.log(`From 0 to 9: ${to9P.toFixed(2)}%`);
  console.log(`From 10 to 19: ${to19P.toFixed(2)}%`);
  console.log(`From 20 to 29: ${to29P.toFixed(2)}%`);
  console.log(`From 30 to 39: ${to39P.toFixed(2)}%`);
  console.log(`From 40 to 50: ${to50P.toFixed(2)}%`);
  console.log(`Invalid numbers: ${invalidP.toFixed(2)}%`);
}
gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
