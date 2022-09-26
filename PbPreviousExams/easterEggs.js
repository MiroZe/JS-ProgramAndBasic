function easterEggs(input) {
  let index = 0;
  let eggPcs = Number(input[index]);
  index++;
  let redEggsCounter = 0;
  let orangeEggsCounter = 0;
  let blueEggsCounter = 0;
  let greenEggsCounter = 0;
  let maxEggs = "";
  let maxEggsPcs = 0;

  for (let i = 0; i < eggPcs; i++) {
    let currentColour = input[index];
    index++;
    switch (currentColour) {
      case "red":
        redEggsCounter++;
        if (redEggsCounter > maxEggsPcs) {
          maxEggsPcs = redEggsCounter;
          maxEggs = "red";
        }
        break;
      case "orange":
        orangeEggsCounter++;
        if (orangeEggsCounter > maxEggsPcs) {
          maxEggsPcs = orangeEggsCounter;
          maxEggs = "orange";
        }
        break;
      case "blue":
        blueEggsCounter++;
        if (blueEggsCounter > maxEggsPcs) {
          maxEggsPcs = blueEggsCounter;
          maxEggs = "blue";
        }
        break;
      case "green":
        greenEggsCounter++;
        if (greenEggsCounter > maxEggsPcs) {
          maxEggsPcs = greenEggsCounter;
          maxEggs = "green";
        }
        break;
    }
  }
  console.log(`Red eggs: ${redEggsCounter}`);
  console.log(`Orange eggs: ${orangeEggsCounter}`);
  console.log(`Blue eggs: ${blueEggsCounter}`);
  console.log(`Green eggs: ${greenEggsCounter}`);
  console.log(`Max eggs: ${maxEggsPcs} -> ${maxEggs}`);
}
easterEggs(["4", "orange", "orange", "red", "orange"]);
