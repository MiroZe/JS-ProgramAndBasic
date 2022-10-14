function vetParking(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let hours = Number(input[index]);
  index++;
  let dayCounter = 0;
  let hourCounter = 0;
  let price = 0;

  for (let i = 1; i <= days; i++) {
    dayCounter++;
    let currentDay = i;
    let priceForDay = 0;

    for (let k = 1; k <= hours; k++) {
      hourCounter++;
      let currentHour = k;
      if (currentDay % 2 !== 0 && currentHour % 2 === 0) {
        priceForDay += 1.25;
      } else if (currentDay % 2 === 0 && currentHour % 2 !== 0) {
        priceForDay += 2.5;
      } else {
        priceForDay += 1;
      }
    }
    price += priceForDay;
    console.log(`Day: ${currentDay} - ${priceForDay.toFixed(2)} leva`);
  }

  console.log(`Total: ${price.toFixed(2)} leva`);
}
vetParking(["5", "2"]);
