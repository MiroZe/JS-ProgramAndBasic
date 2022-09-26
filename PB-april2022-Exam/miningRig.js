function miningRig(input) {
  let videoCardPRice = Number(input[0]);
  let adapterPrice = Number(input[1]);
  let conusmedElPerDay = Number(input[2]);
  let profitForOneDay = Number(input[3]);
  let otherParts = 1000;

  let totalVideoCardPrice = 13 * videoCardPRice;
  let totalAdapterPrice = 13 * adapterPrice;
  let totalCost = totalVideoCardPrice + totalAdapterPrice + otherParts;
  let totalProfit = profitForOneDay - conusmedElPerDay;
  let allDayProfit = 13 * totalProfit;
  let investitionReturning = Math.ceil(totalCost / allDayProfit);

  console.log(totalCost);
  console.log(investitionReturning);
}
miningRig(["800", "10", "0.32", "6.4"]);
