function coffeMachine(input) {
  let drinkType = input[0];
  let sugar = input[1];
  let pcsOfDrinks = Number(input[2]);
  let totalSum = 0;
  switch (drinkType) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          totalSum = pcsOfDrinks * 0.9 * 0.65;
          break;
        case "Normal":
          totalSum = pcsOfDrinks * 1;
          break;
        case "Extra":
          totalSum = pcsOfDrinks * 1.2;
          break;
      }
      if (pcsOfDrinks > 5) {
        totalSum *= 0.75;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          totalSum = pcsOfDrinks * 1 * 0.65;
          break;
        case "Normal":
          totalSum = pcsOfDrinks * 1.2;
          break;
        case "Extra":
          totalSum = pcsOfDrinks * 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          totalSum = pcsOfDrinks * 0.5 * 0.65;
          break;
        case "Normal":
          totalSum = pcsOfDrinks * 0.6;
          break;
        case "Extra":
          totalSum = pcsOfDrinks * 0.7;
          break;
      }
      break;
  }
  if (totalSum > 15) {
    totalSum *= 0.8;
  }
  //console.log(totalSum)
  console.log(
    `You bought ${pcsOfDrinks} cups of ${drinkType} for ${totalSum.toFixed(
      2
    )} lv.`
  );
}
coffeMachine(["Tea", "Extra", "3"]);
