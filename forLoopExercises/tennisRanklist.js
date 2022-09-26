function tennisRanklist(input){
let index = 0;
let tournaments = Number(input[index]);
    index++
let startPoints = Number(input[index]);
index++
let tempPoints = 0;

let result = 0;
let winCount = 0
for(let i = 0; i < tournaments; i++){
    result = input[index];
    index++
    switch(result){
        case "W" : tempPoints += 2000
        winCount++;break
        case "F" : tempPoints += 1200;break;
        case "SF": tempPoints += 720;break;

    }

}
    let totalPoints = startPoints + tempPoints;
    let averagePoints = Math.floor(tempPoints / tournaments ); 
    let percentOfWIn = winCount/tournaments * 100;
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${percentOfWIn.toFixed(2)}%`)
 
 
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])





