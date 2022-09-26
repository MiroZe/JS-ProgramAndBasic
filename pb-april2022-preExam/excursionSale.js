function excursionSale(input) {
  let index = 0;
  let seaVacation = Number(input[index]);
  index++;
  let mountainVacation = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let price = 0;
  let isAllSold = false;

  while (command !== "Stop") {
    let type = command;
    switch (type) {
      case "sea":
        seaVacation--;
        if (seaVacation >= 0) {
          price += 680;
        }
        break;
      case "mountain":
        mountainVacation--;
        if (mountainVacation >= 0) {
          price += 499;
        }
    }
    if (seaVacation <= 0 && mountainVacation <= 0) {
      isAllSold = true;
      console.log("Good job! Everything is sold.");
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`Profit: ${price} leva.`);
}
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
