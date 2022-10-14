function easterParty(input) {
  let guests = Number(input[0]);
  let OneTicketPrice = Number(input[1]);
  let budget = Number(input[2]);
  let cackePrice = budget * 0.1;

  if (guests >= 10 && guests <= 15) {
    OneTicketPrice *= 0.85;
  } else if (guests > 15 && guests <= 20) {
    OneTicketPrice *= 0.8;
  } else if (guests > 20) {
    OneTicketPrice *= 0.75;
  }
  let sum = guests * OneTicketPrice + cackePrice;
  if (budget >= sum) {
    console.log(`It is party time! ${(budget - sum).toFixed(2)} leva left.`);
  } else if (budget < sum) {
    console.log(`No party! ${(sum - budget).toFixed(2)} leva needed.`);
  }
}
easterParty(["24",
"35",
"550"])
