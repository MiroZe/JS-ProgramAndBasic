function fitnessCard(input) {
  let budget = Number(input[0]);
  let gender = input[1];
  let age = input[2];
  let sport = input[3];
  let cardPrice = 0;
  switch (sport) {
    case "Gym":
      cardPrice = 42;
      if (gender === "f") {
        cardPrice = 35;
      }
      break;
    case "Boxing":
      cardPrice = 41;
      if (gender === "f") {
        cardPrice = 37;
      }
      break;
    case "Yoga":
      cardPrice = 45;
      if (gender === "f") {
        cardPrice = 42;
      }
      break;
    case "Zumba":
      cardPrice = 34;
      if (gender === "f") {
        cardPrice = 31;
      }
      break;
    case "Dances":
      cardPrice = 51;
      if (gender === "f") {
        cardPrice = 53;
      }
      break;
    case "Pilates":
      cardPrice = 39;
      if (gender === "f") {
        cardPrice = 37;
      }
      break;
  }
  if (age <= 19) {
    cardPrice *= 0.8;
  }
  if (budget >= cardPrice) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(cardPrice - budget).toFixed(
        2
      )} more.`
    );
  }
}

fitnessCard(["33.60", "f", "15", "Yoga"]);
