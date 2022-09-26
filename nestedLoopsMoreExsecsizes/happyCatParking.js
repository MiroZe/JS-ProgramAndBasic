function happyCatParking(input) {
  let index = 0;
  let totalDays = Number(input[index]);
  index++;
  let totalSum = 0;
  let dayCount = 0;

  let hours = Number(input[index]);
  index++;

  for (let i = 1; i <= totalDays; i++) {
    let dayTax = 0;
    let hourCount = 0;
    dayCount++;
    for (let m = 0; m < hours; m++) {
      hourCount++;
      if (dayCount % 2 !== 0 && hourCount % 2 === 0) {
        dayTax += 1.25;
      } else if (dayCount % 2 === 0 && hourCount % 2 !== 0) {
        dayTax += 2.5;
      } else {
        dayTax += 1;
      }
    }
    totalSum += dayTax;
    console.log(`Day: ${dayCount} - ${dayTax.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
happyCatParking(["5", "2"]);
