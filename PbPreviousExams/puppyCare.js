function puppyCare(input) {
  let index = 0;
  let puppyFood = Number(input[index]);
  index++;
  let puppyFoogGrms = puppyFood * 1000;
  let command = input[index];
  index++;
  let totalEatenFood = 0;
  let isFoodEnough = true;

  while (command !== "Adopted") {
    let eatenFood = Number(command);
    totalEatenFood += eatenFood;
    if (totalEatenFood > puppyFoogGrms) {
      isFoodEnough = false;
    }
    command = input[index];
    index++;
  }

  let diff = Math.abs(puppyFoogGrms - totalEatenFood);
  if (isFoodEnough) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}
puppyCare(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
