function sumOfTwoNumbers(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let combination = 0;
  let isCombinationFound = false;

  for (let i = firstNumber; i <= secondNumber; i++) {
    for (let m = firstNumber; m <= secondNumber; m++) {
      let result = i + m;
      combination++;

      if (result === magicNumber) {
        isCombinationFound = true;

        console.log(
          `Combination N:${combination} (${i} + ${m} = ${magicNumber})`
        );
        break;
      }
    }
    if (isCombinationFound){
      break;
    }
  }
  if(!isCombinationFound){
    console.log(`${combination} combinations - neither equals ${magicNumber}`);
}
}
sumOfTwoNumbers(["88", "888", "2000"]);
