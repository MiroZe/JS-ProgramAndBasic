function changeBureau(input) {
  let bitcoinPcs = Number(input[0]);
  let chinesYuans = Number(input[1]);
  let commision = Number(input[2]);
  let bgn = (bitcoinPcs * 1168) + ((chinesYuans * 0.15) * 1.76);
  let eur = bgn / 1.95;
  let sum = eur - (eur * commision/100);

  console.log(sum.toFixed(2));
}
changeBureau(["20",
"5678",
"2.4"])
