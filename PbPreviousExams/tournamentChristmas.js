function tournamentChristmas(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let totalMoney = 0;
  let totalWins = 0;
  let totalLoses = 0;

  for (let i = 0; i < days; i++) {
    let command = input[index];
    index++;
    let dayWins = 0;
    let dayLoses = 0;
    let dayMoneys = 0;

    while (command !== "Finish") {
      let sport = command;
      let score = input[index];
      index++;
      if (score === "win") {
        dayWins++;
        dayMoneys += 20;
        totalWins++;
      } else {
        dayLoses++;
        totalLoses++;
      }
      command = input[index];
      index++;
    }
    if (dayWins > dayLoses) {
      dayMoneys *= 1.1;
    }
    totalMoney += dayMoneys;
  }
  if (totalWins > totalLoses) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}
tournamentChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
