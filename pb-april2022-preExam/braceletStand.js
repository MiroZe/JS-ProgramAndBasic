function braceletStand(input) {
  let moneyForDay = Number(input[0]);
  let profitForDay = Number(input[1]);
  let totalCost = Number(input[2]);
  let priceForGift = Number(input[3]);

  let savedMoney = 5 * moneyForDay;
  let totalProfit = 5 * profitForDay;
  let totalMoney = savedMoney + totalProfit;
  let balance = totalMoney - totalCost;
  let diff = Math.abs(priceForGift - balance);

  if (balance >= priceForGift) {
    console.log(
      `Profit: ${balance.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
  }
}
braceletStand(["15.20", "200.00", "7.30", "1500.12"]);
