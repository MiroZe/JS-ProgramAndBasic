function computerFirm(input) {
  let index = 0;
  let computerPcs = Number(input[index]);
  index++;
  let rating = 0;
  let realisedSells = 0;

  for (let i = 0; i < computerPcs; i++) {
    let currentRating = input[index];
    index++;
    let thirdDiditRating = Number(currentRating[2]);
    let secondDigitRating = currentRating[0] + currentRating[1];
    let possibleSells = Number(secondDigitRating);

    if (thirdDiditRating === 2) {
      realisedSells += 0;
    } else if (thirdDiditRating === 3) {
      realisedSells += possibleSells * 0.5;
    } else if (thirdDiditRating === 4) {
      realisedSells += possibleSells * 0.7;
    } else if (thirdDiditRating === 5) {
      realisedSells += possibleSells * 0.85;
    } else if (thirdDiditRating === 6) {
      realisedSells += possibleSells;
    }
    rating += thirdDiditRating;
  }
  let avgRating = rating / computerPcs;

  console.log(realisedSells.toFixed(2));
  console.log(avgRating.toFixed(2));
}
computerFirm(["5", "122", "156", "202", "214", "185"]);
