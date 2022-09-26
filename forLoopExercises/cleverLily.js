function cleverLily(input) {
  let age = Number(input[0]);
  let washingMashinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let savedMoney = 0;
  let recievedToys = 0;
  let tempMoney = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      tempMoney += 10;
      savedMoney += tempMoney ;
      savedMoney -= 1 ;
    } else {
      recievedToys += 1;
    }
  }
  let totalMoney = recievedToys * toyPrice + savedMoney;

  if (washingMashinePrice <= totalMoney) {
    console.log(`Yes! ${(totalMoney - washingMashinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMashinePrice - totalMoney).toFixed(2)}`);
  }
}
cleverLily(["10",
"170.00",
"6"])

