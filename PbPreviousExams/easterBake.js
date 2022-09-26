function easterBake(input) {
  let index = 0;
  let easterBreadPcs = Number(input[index]);
  index++;
  let totalSugarUsed = 0;
  let totalFlourUsed = 0;
  let maxSugar = 0;
  let maxFlour = 0;

  for (let i = 0; i < easterBreadPcs; i++) {
    let sugarUsed = Number(input[index]);
    index++;
    let flourUsed = Number(input[index]);
    index++;
    totalSugarUsed += sugarUsed;
    totalFlourUsed += flourUsed;
    if (sugarUsed > maxSugar) {
      maxSugar = sugarUsed;
    }
    if (flourUsed > maxFlour) {
      maxFlour = flourUsed;
    }
  }
  let sugarPacks = Math.ceil(totalSugarUsed / 950);
  let flourPacks = Math.ceil(totalFlourUsed / 750);
  console.log(`Sugar: ${sugarPacks}`);
  console.log(`Flour: ${flourPacks}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
