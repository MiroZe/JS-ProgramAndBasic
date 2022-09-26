function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;
  let bestScorer = "";
  let scoredGoals = 0;

  while (command !== "END") {
    let currentPlayer = command;
    let currentGoals = Number(input[index]);
    if (currentGoals > scoredGoals) {
      bestScorer = currentPlayer;
      scoredGoals = currentGoals;
    }

    if (currentGoals >= 10) {
      break;
    }

    command = input[index];
    index++;
  }
  console.log(`${bestScorer} is the best player!`);
  if (scoredGoals >= 3) {
    console.log(`He has scored ${scoredGoals} goals and made a hat-trick !!!`);
  } else if (scoredGoals < 3) {
    console.log(`He has scored ${scoredGoals} goals.`);
  }
}
bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
