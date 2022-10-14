function trainTheTrainer(input) {
  let index = 0;
  let jury = Number(input[index]);
  index++;
  sumOfGrades = 0;
  let command = input[index];
  index++;
  let gradeCounter = 0;

  while (command !== "Finish") {
    let presentationName = command;
    let currentPresentationGrade = 0;

    for (i = 0; i < jury; i++) {
      let currentGrade = Number(input[index]);
      sumOfGrades += currentGrade;
      currentPresentationGrade += currentGrade;
      gradeCounter++;
      index++;
    }
    let avgGrade = currentPresentationGrade / jury;
    console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

    command = input[index];
    index++;
  }
  let totalAvgs = sumOfGrades / gradeCounter;
  console.log(`Student's final assessment is ${totalAvgs.toFixed(2)}.`);
}
trainTheTrainer([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
