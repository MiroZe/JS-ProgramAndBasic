function carNumber(input){

let firstNumber = Number(input[0]);
let lastNumber = Number(input[1]);
let printLine = ""

for( let i = firstNumber; i <= lastNumber; i++){
    
    for( let m = firstNumber; m <= lastNumber;m++){
        
        for (k =firstNumber ; k <= lastNumber;k++){
            for ( r = firstNumber; r <= lastNumber; r++){
                
                
                if(i % 2 !== 0 && r % 2 === 0 && i > r && ( m+ k) % 2 === 0){
                    printLine += `${i}${m}${k}${r}`+" "
                }else  if(i % 2=== 0 && r % 2 !==0 && i > r && ( m+ k) % 2 === 0){
                    printLine += `${i}${m}${k}${r}`+" ";
                }

            }
        }

    }
}
console.log(printLine);

}
carNumber(["5","8"])