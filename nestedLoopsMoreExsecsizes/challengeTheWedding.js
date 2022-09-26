function challengeTheWedding(input) {
  let manPcs = Number(input[0]);
  let womanPcs = Number(input[1]);
  let tables = Number(input[2]);
  let variants = 0;
  printline = "";
  let isTableEnough = true;

  for (let i = 1; i <= manPcs; i++) {
    for (m = 1; m <= womanPcs; m++) {
      variants++;

      printline += `(${i} <-> ${m})` + " ";
      if (variants >= tables) {
        isTableEnough = false;
        break;
      }
    }
    if (!isTableEnough) {
      break;
    }
  }

  console.log(printline);
}
challengeTheWedding(["2", "2", "6"]);
