function multiplyTable(input) {
  let index = 0;
  let userNumber = input[index];
  index++;
  let n1 = Number(userNumber[0]);
  let n2 = Number(userNumber[1]);
  let n3 = Number(userNumber[2]);

  for (let i = 1; i <= n3; i++) {
    for (k = 1; k <= n2; k++) {
      for (m = 1; m <= n1; m++) {
        let result = m * k * i;
        console.log(`${i} * ${k} * ${m} = ${result};`);
      }
    }
  }
}
multiplyTable(["222"]);
