function pcGameShop(input){
let index = 0;
let selledGames = Number(input[index]);
index++;
let game1Count = 0;
let game2Count = 0;
let game3Count = 0;
let othersCount = 0;
for(i = 0; i < selledGames; i++){
    let gameName = input[index];
    index++;
    switch(gameName){
        case "Hearthstone": game1Count++; break;
        case "Fornite": game2Count++; break;
        case "Overwatch": game3Count++; break;
        default : othersCount++; break;
    }

}
let game1percentage = game1Count / selledGames *100;
let game2percentage = game2Count / selledGames *100;
let game3percentage = game3Count / selledGames *100;
let game4percentage = othersCount / selledGames *100;
console.log(`Hearthstone - ${game1percentage.toFixed(2)}%`);
console.log(`Fornite - ${game2percentage.toFixed(2)}%`);
console.log(`Overwatch - ${game3percentage.toFixed(2)}%`);
console.log(`Others - ${game4percentage.toFixed(2)}%`);

}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])