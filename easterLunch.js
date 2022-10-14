function easterLunch(input) {
  let easterBreadPcs = Number(input[0]);
  let eggPcs = Number(input[1]);
  let cookies = Number(input[2]);
  let paintEgs = eggPcs * 12 * 0.15;
  let sum = easterBreadPcs * 3.2 + eggPcs * 4.35 + cookies * 5.4 + paintEgs;

  console.log(sum.toFixed(2));
}

easterLunch(["4",
"4",
"3"])
