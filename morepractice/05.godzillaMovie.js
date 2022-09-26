function godzillaMovie(input) {
  const movieBudget = Number(input[0]);
  const actors = Number(input[1]);
  let scenicCostumPrice = Number(input[2]);
  let totalcustomPrice = scenicCostumPrice * actors;
  const decor = movieBudget * 0.1;

  if (actors >= 150) {
    totalcustomPrice *= 0.9;
  }
  let cost = decor + totalcustomPrice;
  const result = Math.abs(movieBudget - cost);
  if (cost > movieBudget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${result.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`);
  }
}

godzillaMovie(["9587.88", "222", "55.68"]);
