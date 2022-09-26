function triangleOfDollars(input) {
  let userNumber = Number(input[0]);
  let result = "";
  for (let row = 1; row <= userNumber; row++) {
    result = "$";
    for (let col = 1; col < row; col++) {
      result += " $";
    }
    console.log(result);
  }
}
triangleOfDollars(["3"]);
