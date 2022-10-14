function nonDecreasingSubset(arrOFNumbers) {
  let newArr = [];
  let arrOfNumbersLength = arrOFNumbers.length;
  newArr.push(arrOFNumbers[0]);

  for (let i = 0; i < arrOfNumbersLength; i++) {
    let currentDigit = arrOFNumbers[i];

    let nextDigit = arrOFNumbers[i + 1];
    if (arrOFNumbers[0] < arrOFNumbers[i + 1]) {
      if (nextDigit >= currentDigit) {
        newArr.push(nextDigit);
      }
    }
  }
  console.log(newArr.join(" "));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
