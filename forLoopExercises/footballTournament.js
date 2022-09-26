function footballTournament(input){
let index = 0;
let teamName = input[index];
index++;
let playedGames = Number(input[index]);
index++
let points = 0;
let winCouner = 0;
let drawCounter = 0;
let lossCounter = 0;
let isPlayedGame = true
if(playedGames === 0){
    console.log(`${teamName} hasn't played any games during this season.`)
}
for(let i = 0; i < playedGames ; i++){
    isPlayedGame = false
    
    let results = input[index];
    index++;
    switch(results){
        case "W" : winCouner++
        points +=3; break;
        case "D" : drawCounter++
        points+=1; break;
        case "L" : lossCounter++; break;

    } 
   
}
if(isPlayedGame != true){
let percentStats = winCouner / playedGames *100;
console.log(`${teamName} has won ${points} points during this season.`);
console.log("Total stats:");
console.log(`## W: ${winCouner}`);
console.log(`## D: ${drawCounter}`);
console.log(`## L: ${lossCounter}`);
console.log(`Win rate: ${percentStats.toFixed(2)}%`);
console.log(isPlayedGame)
}

}
footballTournament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])