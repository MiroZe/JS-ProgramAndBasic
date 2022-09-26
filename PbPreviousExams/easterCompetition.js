function easterCompetition(input){

let index =0 ;
let easterBread = Number(input[index]);
index++;
let bestBakerman = "";
let bestResult = 0;

for(i = 0; i < easterBread;i++){
    let currentBakerman = input[index];
    index++
    let command = input[index];
    index++
    let currentTotalGrade =0;

    while( command !== "Stop"){
        let currentGrade = Number(command);
        currentTotalGrade += currentGrade;
                      
        command = input[index];
        index++;
        
    
    }
    console.log(`${currentBakerman} has ${currentTotalGrade} points.`)
    if(currentTotalGrade > bestResult){
        bestBakerman = currentBakerman;
        bestResult = currentTotalGrade;
        console.log(`${currentBakerman} is the new number 1!`);

    }

    
    

}
console.log(`${bestBakerman} won competition with ${bestResult} points!`);
}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
