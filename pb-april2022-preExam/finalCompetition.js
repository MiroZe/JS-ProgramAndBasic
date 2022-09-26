function finalCompetition(input) {
  let dancers = Number(input[0]);
  let points = Number(input[1]);
  let season = input[2];
  let location = input[3];
  moneyPrize = 0;

  switch (location) {
    case "Bulgaria":
      switch (season) {
        case "summer":
          moneyPrize = points * dancers * 0.95;
          break;
        case "winter":
          moneyPrize = points * dancers * 0.92;
          break;
      }
      break;
    case "Abroad":
      switch (season) {
        case "summer":
          moneyPrize = (points * dancers + (points * dancers) / 2) * 0.9;
          break;
        case "winter":
          moneyPrize = (points * dancers + (points * dancers) / 2) * 0.85;
          break;
      }
      break;
  }
  let charity = moneyPrize * 0.75;
  let totalSum = moneyPrize - charity;
  let prizeForOneDancer = totalSum / dancers;

  console.log(`Charity - ${charity.toFixed(2)}`);
  console.log(`Money per dancer - ${prizeForOneDancer.toFixed(2)}`);
}
finalCompetition(["25", "98", "winter", "Bulgaria"]);
