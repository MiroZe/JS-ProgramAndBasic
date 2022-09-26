function equalSums(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let printLine = "";
  for (let i = startNumber; i <= endNumber; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;

    for (k = 0; k < currentNum.length; k++) {
      let currentDigit = Number(currentNum.charAt(k));
      if (k % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}
equalSums(["100115", "100120"]);
