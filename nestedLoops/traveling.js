function traveling(input){
let index =0;
let destination = ""
let command = input[index];
index++;
while(command !== "End" ){
    let budget = Number(input[index]);
    index++;
    let savedMoney = 0;
    destination = command;
    
        for(let i = 0;i < budget;i++){
            let currentSaving = Number(input[index])
            index++
            savedMoney += currentSaving;
            if(savedMoney >= budget){
                console.log(`Going to ${destination}!`);
                break;
            }
                  

        }
        
        command = input[index];
        index++
}


}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
