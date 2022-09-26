function goldMine(input){

let index = 0;
let locations = Number(input[index]);
index++;

for( let i= 0; i < locations; i++){
    let expectedDiggedGold = Number(input[index]);
    index++;
    let days = Number(input[index]);
    index++;
    let allDays = 0;
   
    
    for( m = 0; m < days; m++){
        let dayDigged = Number(input[index])
        index++;
        allDays += dayDigged
         }
    let averageDigged = allDays / days;
    let diff = Math.abs( expectedDiggedGold - averageDigged);
    
    if( averageDigged >= expectedDiggedGold){
        console.log(`Good job! Average gold per day: ${averageDigged.toFixed(2)}.`);
    }else{
        console.log(`You need ${diff.toFixed(2)} gold.`);
    }
    }
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])

