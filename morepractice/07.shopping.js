function shopping(input) {
  const budget = Number(input[0]);
  const vgaPcs = Number(input[1]);
  const cpuPcs = Number(input[2]);
  const ramPcs = Number(input[3]);
  const vgaPrice = 250;
  const totalVgaPrice = vgaPcs * vgaPrice;
  const cpuPrice = totalVgaPrice * 0.35;
  const RamPrice = totalVgaPrice * 0.1;
  const totalcpuPrice = cpuPcs * cpuPrice;
  const totalRamPrice = ramPcs * RamPrice;
  let cost = totalVgaPrice + totalcpuPrice + totalRamPrice;
  if (vgaPcs > cpuPcs) {
    cost *= 0.85;
  }
  if (cost <= budget) {
    console.log(`You have ${(budget - cost).toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(budget - cost).toFixed(
        2
      )} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
