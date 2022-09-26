function poolDay(input) {
  let peopleCount = Number(input[0]);
  let enterTax = Number(input[1]);
  let sunbedPrice = Number(input[2]);
  let umbrellaPrice = Number(input[3]);

  let totatlEnterTax = peopleCount * enterTax;
  let umbrellas = Math.ceil(peopleCount / 2);
  let sunbeds = Math.ceil(peopleCount * 0.75);
  let totalUmbrellasPrice = umbrellaPrice * umbrellas;
  let totalSunbedPrice = sunbeds * sunbedPrice;
  let totalPrice = totatlEnterTax + totalUmbrellasPrice + totalSunbedPrice;

console.log(`${totalPrice.toFixed(2)} lv.`);


}
poolDay(["100","8","6","4"]);

