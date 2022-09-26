function aluminumJoinery(input) {
  let joinery = Number(input[0]);
  let type = input[1];
  let delievery = input[2];
  let price = 0;
  let ifOrderEnough = true;

  if (joinery < 10) {
    ifOrderEnough = false;
    console.log("Invalid order");
  }

  switch (type) {
    case "90X130":
      price = joinery * 110;
      if (joinery > 30 && joinery < 60) {
        price *= 0.95;
      } else if (joinery > 60) {
        price *= 0.92;
      }
      break;
    case "100X150":
      price = joinery * 140;
      if (joinery > 40 && joinery < 80) {
        price *= 0.94;
      } else if (joinery > 80) {
        price *= 0.9;
      }
      break;
    case "130X180":
      price = joinery * 190;
      if (joinery > 20 && joinery < 50) {
        price *= 0.93;
      } else if (joinery > 50) {
        price *= 0.88;
      }
      break;
    case "200X300":
      price = joinery * 250;
      if (joinery > 25 && joinery < 50) {
        price *= 0.91;
      } else if (joinery > 50) {
        price *= 0.86;
      }
      break;
  }
  if (delievery === "With delivery") {
    price += 60;
  }
  if (joinery > 99) {
    price *= 0.96;
  }
  if (ifOrderEnough) {
    console.log(`${price.toFixed(2)} BGN`);
  }
}
aluminumJoinery(["105", "100X150", "With delivery"]);
