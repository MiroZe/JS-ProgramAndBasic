function logistics(input) {
  let index = 0;
  let loadingPcs = Number(input[index]);
  index++;
  let price = 0;
  let minibus = 0;
  let truck = 0;
  let train = 0;
  let totalTons = 0;

  for (let i = 0; i < loadingPcs; i++) {
    let currentLoading = Number(input[index]);
    index++;
    if (currentLoading <= 3) {
      price += currentLoading * 200;
      minibus += currentLoading;
      totalTons += currentLoading;
    } else if (currentLoading <= 11) {
      price += currentLoading * 175;
      truck += currentLoading;
      totalTons += currentLoading;
    } else if (currentLoading >= 12) {
      price += currentLoading * 120;
      train += currentLoading;
      totalTons += currentLoading;
    }
  }
  let avgPrice = price / totalTons;
  console.log(avgPrice.toFixed(2));
  let minibusP = (minibus / totalTons) * 100;
  let truckP = (truck / totalTons) * 100;
  let trainP = (train / totalTons) * 100;
  console.log(`${minibusP.toFixed(2)}%`);
  console.log(`${truckP.toFixed(2)}%`);
  console.log(`${trainP.toFixed(2)}%`);
}
logistics(["5", "2", "10", "20", "1", "7"]);
