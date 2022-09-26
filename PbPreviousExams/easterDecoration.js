function easterDecoration(input) {
  let index = 0;
  let customers = Number(input[index]);
  index++;
  let totalSum = 0;

  for (i = 0; i < customers; i++) {
    let command = input[index];
    index++;
    let goodsCounter = 0;
    let currentPrice = 0;

    while (command !== "Finish") {
      let goods = command;

      switch (goods) {
        case "basket":
          currentPrice += 1.5;
          goodsCounter++;
          break;
        case "wreath":
          currentPrice += 3.8;
          goodsCounter++;
          break;
        case "chocolate bunny":
          currentPrice += 7;
          goodsCounter++;
          break;
      }

      command = input[index];
      index++;
    }

    if (goodsCounter % 2 === 0) {
      currentPrice *= 0.8;
    }
    totalSum += currentPrice;
    console.log(
      `You purchased ${goodsCounter} items for ${currentPrice.toFixed(2)} leva.`
    );
  }
  let avgSum = totalSum / customers;
  console.log(`Average bill per client is: ${avgSum.toFixed(2)} leva.`);
}
easterDecoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
