function rectangle() {
  let n = 10;
  let symbol = "*";
  let printLine = "";

  for (let i = 1; i <= 10; i++) {
    printLine = symbol.repeat(n);

    console.log(printLine);
  }
}
rectangle();
