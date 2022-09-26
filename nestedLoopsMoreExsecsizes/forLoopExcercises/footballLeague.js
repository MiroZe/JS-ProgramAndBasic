function footballLeague(input){
    let index = 0
    let staduimCapacity = Number(input[index]);
    index++;
    let totalFans = Number (input[index]);
    index++;
    let aFans  = 0;
    let vFans = 0;
    let bFans = 0;
    let gFans = 0;

    for(let i = 0; i< totalFans; i++){
        let currentFan = input[index];
        index++;
        switch(currentFan){
            case "A": aFans++;break;
            case "B": bFans++;break;
            case "V": vFans++;break;
            case "G" : gFans++;break;
        }
        
    }
    
    let aFansP = aFans / totalFans * 100;
    let bFansP = bFans / totalFans * 100;
    let vFansP = vFans / totalFans * 100;
    let gFansP = gFans / totalFans * 100;
    let totalFansP =  totalFans / staduimCapacity * 100;
    console.log(`${aFansP.toFixed(2)}%`);
    console.log(`${bFansP.toFixed(2)}%`);
    console.log(`${vFansP.toFixed(2)}%`);
    console.log(`${gFansP.toFixed(2)}%`);
    console.log(`${totalFansP.toFixed(2)}%`);


}
footballLeague(["93","16","A","V","G","G","B","B","G","B","A","B","B","B","A","B","B","A"])