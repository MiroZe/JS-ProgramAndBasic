function easterGuests(input) {
  let guests = Number(input[0]);
  let budget = Number(input[1]);
  let easterBreadPcs = Math.ceil(guests / 3);
  let eggs = guests * 2;
  let sum = easterBreadPcs * 4 + eggs * 0.45;

  if (budget >= sum) {
    console.log(
      `Lyubo bought ${easterBreadPcs} Easter bread and ${eggs} eggs.`
    );
    console.log(`He has ${(budget - sum).toFixed(2)} lv. left.`);
  } else if (budget < sum) {
    console.log("Lyubo doesn't have enough money.");
    console.log(`He needs ${(sum - budget).toFixed(2)} lv. more.`);
  }
}

easterGuests(["9", "12"]);
