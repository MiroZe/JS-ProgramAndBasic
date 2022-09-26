function learningMats(input) {
  let pens = 5.8;
  let markers = 7.2;
  let cleaningLiq = 1.2;
  let sumPens = Number(input[0] * pens);
  let sumMarker = Number(input[1] * markers);
  let sumcleanings = Number(input[2] * cleaningLiq);
  let totDiscount = Number(input[3] / 100);
  let totalSumD = Number((sumPens + sumMarker + sumcleanings) * totDiscount);
  let totalSum = Number(sumPens + sumMarker + sumcleanings);
  let payment = Number(totalSum - totalSumD);

  console.log(payment);
}
learningMats([4, 2, 5, 13]);
