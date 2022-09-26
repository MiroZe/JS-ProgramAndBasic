function foodForPets(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let totalFoods = Number(input[index]);
  index++;
  let totalCatFood = 0;
  let totalDogFood = 0;
  let eatenBisquits = 0;
  let dayCounter = 0;

  for (i = 0; i < days; i++) {
    dayCounter++;
    let currentDogFood = Number(input[index]);
    index++;
    totalDogFood += currentDogFood;
    let currentCatFood = Number(input[index]);
    index++;
    totalCatFood += currentCatFood;
    let daylyEatenFood = currentDogFood + currentCatFood;
    if (dayCounter % 3 === 0) {
      eatenBisquits += daylyEatenFood * 0.1;
    }
  }
  let totalEatenFood = totalCatFood + totalDogFood;
  console.log(`Total eaten biscuits: ${Math.round(eatenBisquits)}gr.`);
  let foodP = (totalEatenFood / totalFoods) * 100;
  let dogP = (totalDogFood / totalEatenFood) * 100;
  let catP = (totalCatFood / totalEatenFood) * 100;
  console.log(`${foodP.toFixed(2)}% of the food has been eaten.`);
  console.log(`${dogP.toFixed(2)}% eaten from the dog.`);
  console.log(`${catP.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);
