function vacation(input){
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++
    let dayCounter = 0;
    let isSavedMoney = true;
    let spendDays = 0;
   

    while(neededMoney > money  ){
        dayCounter++;
        let word = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        switch(word){
            case  "spend" : money -= currentMoney;
            spendDays++
            break;
            case "save" : money += currentMoney
            spendDays = 0;

            break;
        }
        if(money < 0 ) {
            money = 0;
                      
        }
        if(spendDays === 5){
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            isSavedMoney = false;
           break;
        }
           

    }
    if(isSavedMoney){
        console.log(`You saved the money for ${dayCounter} days.`);
    }
    
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
