function theSongsOfTheWheel(input) {
  let userNumber = Number(input[0]);
  let printLine = "";
  let combination = 0;
  let password = "";
  let isFountPassword = false;
  let isNumberFound = false;

  for (let a = 1; a <= 9; a++) {
    for (b = 1; b <= 9; b++) {
      for (c = 1; c <= 9; c++) {
        for (d = 1; d <= 9; d++) {
          if (a * b + c * d === userNumber && a < b && c > d) {
            isNumberFound = true;
            combination++;
            printLine += `${a}${b}${c}${d} `;
            if (combination === 4) {
              isFountPassword = true;
              password = `${a}${b}${c}${d}`;
            }
          }
        }
      }
    }
  }
  if (isNumberFound) {
    console.log(printLine);
  }

  if (isFountPassword) {
    console.log(`Password: ${password}`);
  } else {
    console.log("No!");
  }
}
theSongsOfTheWheel(["139"]);
