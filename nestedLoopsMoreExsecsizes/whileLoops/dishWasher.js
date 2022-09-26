function dishWasher(input) {
  let index = 0;
  let bottles = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let littres = bottles * 750;
  let usedLittres = 0;
  let filCounter = 0;
  let washedPlates = 0;
  let washedPots = 0;
  let isDetergentEnough = true;

  while (command !== "End") {
    filCounter++;
    let currentDishes = Number(command);

    if (filCounter % 3 === 0) {
      usedLittres += currentDishes * 15;
      washedPots += currentDishes;
    } else {
      usedLittres += currentDishes * 5;
      washedPlates += currentDishes;
    }

    let diff = Math.abs(littres - usedLittres);
    if (usedLittres > littres) {
      isDetergentEnough = false;
      console.log(`Not enough detergent, ${diff} ml. more necessary!`);
      break;
    }
    command = input[index];
    index++;
  }
  let diff = Math.abs(littres - usedLittres);

  if (isDetergentEnough) {
    console.log(`Detergent was enough!`);
    console.log(`${washedPlates} dishes and ${washedPots} pots were washed.`);
    console.log(`Leftover detergent ${diff} ml.`);
  }
}

dishWasher(["1", "10", "15", "10", "12", "13", "30"]);
