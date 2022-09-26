function profit(input) {
  let oneLeva = Number(input[0]);
  let twoLeva = Number(input[1]);
  let fiveLeva = Number(input[2]);
  let sum = Number(input[3]);
  

  for (let i = 0; i <= oneLeva; i++) {
    for (let m = 0; m <= twoLeva; m++) {
      for (let k = 0; k <= fiveLeva; k++) {
        if (i * 1 + m * 2 + k * 5 === sum) {
          console.log(
            `${i} * 1 lv. + ${m} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
          );
        }
      }
    }
  }
}
profit(["5", "3", "1", "7"]);
