function examPreparation(input) {
    let index = 0;
    let negativeGrades = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let sumOfGrades = 0;
    let negativeGradesCount = 0;
    let taskCounter = 0;
    let lastProblem = ""
    let isNegative = false;

    while (taskName !== "Enough") {
        taskCounter++;
        lastProblem = taskName;
        let currentGrade = Number(input[index]);
        index++
        sumOfGrades += currentGrade;
        if (currentGrade <= 4) {
            negativeGradesCount++
        }
        if (negativeGrades === negativeGradesCount) {
            isNegative = true;
            console.log(`You need a break, ${negativeGradesCount} poor grades.`);
            break;
        }
        taskName = input[index];
        index++

    }
    let avgScore = sumOfGrades / taskCounter;
    if (!isNegative) {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
