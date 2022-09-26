function pcStore(input) {
  let cpuPriceUSD = Number(input[0]);
  let videoCardUSD = Number(input[1]);
  let memmoryUSD = Number(input[2]);
  let memoryQuantity = Number(input[3]);
  let discount = Number(input[4]);
  let cpuPriceBGN = cpuPriceUSD * 1.57;
  let videoCardBGN = videoCardUSD * 1.57;
  let memmoryBGN = memmoryUSD * 1.57;
  let cpuPriceBgnDisc = cpuPriceBGN - cpuPriceBGN * discount;
  let videoCardBGNDisc = videoCardBGN - videoCardBGN * discount;

  let totalSum =
    cpuPriceBgnDisc + videoCardBGNDisc + memmoryBGN * memoryQuantity;

  console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);
}
pcStore(["200", "100", "80", "1", "0.01"]);
