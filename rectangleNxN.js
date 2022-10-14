function rectangleNxN(n) {
  let printLine = "";
  let symbol = "*";
  for (let i = 1; i <= n; i++) {
    printLine = symbol.repeat(n);
    console.log(printLine);
  }
}
rectangleNxN(3);
