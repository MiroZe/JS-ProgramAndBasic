function uniquePinodes(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);
  let pins = "";

  for (let i = 1; i <= n1; i++) {
    for (let k = 1; k <= n2; k++) {
      if (k === 2 || k === 3 || k === 5 || k === 7) {
        for (let m = 1; m <= n3; m++) {
          if (i % 2 === 0 && m % 2 === 0) {
            pins += `${i} ${k} ${m} \n`;
          }
        }
      }
    }
  }

  console.log(pins);
}
uniquePinodes(["8", "2", "8"]);
