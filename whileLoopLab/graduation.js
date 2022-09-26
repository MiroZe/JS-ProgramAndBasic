function graduatuion(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let totalResult = 0;
    let excludedCunter = 0;
    let isGraduated = true;

    while (grade <= 12) {
        let yearResult = input[index];
        index++;
        let currentResult = Number(yearResult)
        if (currentResult >= 4) {
            totalResult += currentResult;
        } else {

            excludedCunter++;
            totalResult += currentResult;
        }
        if (excludedCunter >= 1) {
            isGraduated = false
            console.log(`${name} has been excluded at ${grade} grade`)
            break;
        }
        grade++
        yearResult++

    }
    let avgResult = totalResult / 12;
    if (isGraduated) {
        console.log(`${name} graduated. Average grade: ${avgResult.toFixed(2)}`);
    }
}
graduatuion(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
