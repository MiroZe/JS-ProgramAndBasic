function basketballTournament(input){
let index = 0;
let command = input[index];
index++;
let wins = 0;
let loses = 0;
let allGames = 0;;


while(command !== "End of tournaments"){
    let tournamentPcs = Number(input[index]);
    index++;
    let tournamentName = command;
     let game = 0;   
     
    
    for(let i = 0; i < tournamentPcs; i++){
        allGames++
        game++;
        let currentName = tournamentName
        let currentDesiPoints = Number(input[index]);
        index++;
        let currentOpponentPoints = Number(input[index]);
        index++;
        
        let diff = Math.abs(currentDesiPoints - currentOpponentPoints)
        if( currentDesiPoints > currentOpponentPoints){
            wins++
            console.log(`Game ${game} of tournament ${currentName}: win with ${diff} points.`);
        } else{
            loses++
            console.log(`Game ${game} of tournament ${currentName}: lost with ${diff} points.`);
        }
    }
    command = input[index]
    index++; 
        

    }
    let winP = wins / allGames * 100;
    let losesP = loses / allGames * 100;
    console.log(`${winP.toFixed(2)}% matches win`);
    console.log(`${losesP.toFixed(2)}% matches lost`);



}


basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])

