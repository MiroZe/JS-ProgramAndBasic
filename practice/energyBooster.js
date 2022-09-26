function energyBooster(input) {
  let fruit = input[0];
  let setType = input[1];
  let setPcs = Number(input[2]);
  let totalPrice = 0;
  switch (fruit) {
    case "Watermelon":
      totalPrice = 56 * 2 * setPcs;
      if (setType === "big") {
        totalPrice = 28.7 * 5 * setPcs;
      }
      break;
    case "Mango":
      totalPrice = 36.66 * 2 * setPcs;
      if (setType === "big") {
        totalPrice = 19.6 * 5 * setPcs;
      }
      break;
    case "Pineapple":
      totalPrice = 42.1 * 2 * setPcs;
      if (setType === "big") {
        totalPrice = 24.8 * 5 * setPcs;
      }
      break;
    case "Raspberry":
      totalPrice = 20 * 2 * setPcs;
      if (setType === "big") {
        totalPrice = 15.2 * 5 * setPcs;
      }
      break;
  }
  if (totalPrice >= 400 && totalPrice <= 1000) {
    totalPrice *= 0.85;
  } else if (totalPrice > 1000) {
    totalPrice *= 0.5;
  }
  console.log(`${totalPrice.toFixed(2)} lv.`);
}
energyBooster(["Pineapple", "small", "1"]);
