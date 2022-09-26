function grades(input) {
  let index = 0;
  let student = Number(input[index]);
  index++;
  let weakStudents = 0;
  let middleStudents = 0;
  let goodStudents = 0;
  let exellentStudents = 0;
  let totalGrades = 0;

  for (let i = 0; i < student; i++) {
    let currentGrades = Number(input[index]);
    index++;
    if (currentGrades >= 2 && currentGrades <= 2.99) {
      weakStudents++;
    } else if (currentGrades >= 3 && currentGrades <= 3.99) {
      middleStudents++;
    } else if (currentGrades >= 4 && currentGrades <= 4.99) {
      goodStudents++;
    } else if (currentGrades >= 5) {
      exellentStudents++;
    }
    totalGrades += currentGrades;
  }
  let avgGrade = totalGrades / student;
  let weakStudentsP = (weakStudents / student) * 100;
  let middleStudentsP = (middleStudents / student) * 100;
  let goodStudentsP = (goodStudents / student) * 100;
  let exellentStudentsP = (exellentStudents / student) * 100;
  console.log(`Top students: ${exellentStudentsP.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${goodStudentsP.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${middleStudentsP.toFixed(2)}%`);
  console.log(`Fail: ${weakStudentsP.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
