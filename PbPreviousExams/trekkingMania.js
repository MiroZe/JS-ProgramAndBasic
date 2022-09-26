function trekkingMania(input) {
  let index = 0;
  let groupPcs = Number(input[0]);
  index++;
  let mussalaGroup = 0;
  let monblannGroup = 0;
  let kilimandjaroGroup = 0;
  let k2Group = 0;
  let everestGroup = 0;

  for (let i = 0; i < groupPcs; i++) {
    let currentGroup = Number(input[index]);
    index++;
    if (currentGroup <= 5) {
      mussalaGroup += currentGroup;
    } else if (currentGroup <= 12) {
      monblannGroup += currentGroup;
    } else if (currentGroup <= 25) {
      kilimandjaroGroup += currentGroup;
    } else if (currentGroup <= 40) {
      k2Group += currentGroup;
    } else if (currentGroup >= 41) {
      everestGroup += currentGroup;
    }
  }

  let totalPeople =
    mussalaGroup + monblannGroup + kilimandjaroGroup + k2Group + everestGroup;

  let mussalaP = (mussalaGroup / totalPeople) * 100;
  let monblannP = (monblannGroup / totalPeople) * 100;
  let kilimandjaroP = (kilimandjaroGroup / totalPeople) * 100;
  let k2P = (k2Group / totalPeople) * 100;
  let everestP = (everestGroup / totalPeople) * 100;
  console.log(`${mussalaP.toFixed(2)}%`);
  console.log(`${monblannP.toFixed(2)}%`);
  console.log(`${kilimandjaroP.toFixed(2)}%`);
  console.log(`${k2P.toFixed(2)}%`);
  console.log(`${everestP.toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);
