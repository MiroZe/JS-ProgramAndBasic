function agencyProfit(input) {
  let companyName = input[0];
  let adultTicketPcs = Number(input[1]);
  let childrenTicketPcs = Number(input[2]);
  let adultTicketPrice = Number(input[3]);
let serviceTax = Number(input[4]);
let childrenTicketPrice = (adultTicketPrice * 0.3) + serviceTax;
  let totalAdultsPrice = (adultTicketPrice + serviceTax) 
  let totalPrice =(childrenTicketPrice * childrenTicketPcs) + (totalAdultsPrice * adultTicketPcs);
  let profit = totalPrice * 0.2;
  console.log(
    `The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`
  );
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])
