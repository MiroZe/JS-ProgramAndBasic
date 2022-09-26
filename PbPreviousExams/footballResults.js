function footballResult(input) {
  let firstGame = input[0];
  let secondGame = input[1];
  let thirdGame = input[2];
  let firstGameHome = Number(firstGame[0]);
  let firstGameAway = Number(firstGame[2]);
  let secondGameHome = Number(secondGame[0]);
  let secondGameAway = Number(secondGame[2]);
  let thirdGameHome = Number(thirdGame[0]);
  let thirdGameAway = Number(thirdGame[2]);
  let wins = 0;
  let draws = 0;
  let loses = 0;
  if (firstGameHome > firstGameAway) {
    wins += 1;
  } else if (firstGameHome === firstGameAway) {
    draws += 1;
  } else {
    loses += 1;
  }
  if (secondGameHome > secondGameAway) {
    wins += 1;
  } else if (secondGameHome === secondGameAway) {
    draws += 1;
  } else {
    loses += 1;
  }
  if (thirdGameHome > thirdGameAway) {
    wins += 1;
  } else if (thirdGameHome === thirdGameAway) {
    draws += 1;
  } else {
    loses += 1;
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loses} games.`);
  console.log(`Drawn games: ${draws}`);
}
footballResult(["0:2", "0:1", "3:3"]);
