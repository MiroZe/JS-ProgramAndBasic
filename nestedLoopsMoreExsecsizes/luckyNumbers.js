function luckyNumbers(input) {
  let userNumber = Number(input[0]);
  let printLine = "";

  for (let i = 1; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
      for (let m = 1; m <= 9; m++) {
        for (let p = 1; p <= 9; p++) {
          let firstCouple = i + k;
          let secondCouple = m + p;
          if (firstCouple === secondCouple) {
            if (userNumber % firstCouple === 0) {
              printLine += `${i}${k}${m}${p}` + " ";
            }
          }
        }
      }
    }
  }
  console.log(printLine);
}
luckyNumbers(["24"]);
