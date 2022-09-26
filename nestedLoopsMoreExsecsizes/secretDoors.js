function secretDoor(input) {
  let lastNumber = Number(input[0]);
  let middleNumber = Number(input[1]);
  let firstNumber = Number(input[2]);
  let printline = "";

  for (let i = 1; i <= lastNumber; i++) {
    for (let m = 2; m <= middleNumber; m++) {
      for (let k = 1; k <= firstNumber; k++) {
        if (i % 2 === 0 && k % 2 === 0) {
          if (m === 2 || m === 3 || m === 5 || m === 7) {
            printline = `${i} ${m} ${k}`;
            console.log(printline);
          }
        }
      }
    }
  }
}
secretDoor(["8", "2", "8"]);
