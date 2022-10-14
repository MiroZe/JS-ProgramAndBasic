function sumOfTwoNumbers(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCounter = 0;
    let isfoundComb = false;



    for(let i = startNumber; i <= endNumber;i++){
        for(l = startNumber; l<= endNumber;l++){
            
            let result = i + l;
            combinationsCounter ++
            
            if( result === magicNumber){
                isfoundComb = true
                 console.log(`Combination N:${combinationsCounter} (${i} + ${l} = ${magicNumber})`)
                break;
            
            }
        }
        if(isfoundComb){
            break;
        }
    }


    if(!isfoundComb){
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }   
       
}
sumOfTwoNumbers(["88", 
"888", 
"2000"])





