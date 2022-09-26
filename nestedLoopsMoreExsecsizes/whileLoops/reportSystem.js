function reportSystem(input) {
  let index = 0;
  let expectedProfit = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let accumulated = 0;
  let paymentCounter = 0;
  let totalCashPaymnets = 0;
  let cashpayments = 0;
  let totalCreditCardPaymnents = 0;
  let creditCardpayments = 0;
  let isSumEnough = false;

  while (command !== "End") {
    paymentCounter++;
    let currentPayment = Number(command);
    if (paymentCounter % 2 !== 0 && currentPayment > 100) {
      console.log("Error in transaction!");
    } else if (paymentCounter % 2 !== 0 && currentPayment <= 100) {
      console.log("Product sold!");
      accumulated += currentPayment;
      cashpayments++;
      totalCashPaymnets += currentPayment;
    }
    if (paymentCounter % 2 === 0 && currentPayment < 10) {
      console.log("Error in transaction!");
    } else if (paymentCounter % 2 === 0 && currentPayment >= 10) {
      console.log("Product sold!");
      accumulated += currentPayment;
      creditCardpayments++;
      totalCreditCardPaymnents += currentPayment;
    }
    if (accumulated >= expectedProfit) {
      isSumEnough = true;
      break;
    }
    command = input[index];
    index++;
  }
  let avgCash = totalCashPaymnets / cashpayments;
  let avgCC = totalCreditCardPaymnents / creditCardpayments;
  if (isSumEnough) {
    console.log(`Average CS: ${avgCash.toFixed(2)}`);
    console.log(`Average CC: ${avgCC.toFixed(2)}`);
  } else {
    console.log("Failed to collect required money for charity.");
  }
}
reportSystem(["600", "86", "150", "98", "227", "End"]);
