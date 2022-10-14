function specialNumbers(input){

    let userNumber = Number(input[0]);
    let result = ""
    for( let a = 1 ;a <=9; a++){
        for(let b = 1 ;b <=9; b++){
            for(let c = 1 ;c <=9; c++){
                for(let d = 1 ;d <=9; d++){
                    if(userNumber % a === 0 && userNumber % b === 0 && userNumber % c === 0 && userNumber % d === 0){
                        result += (`${a}${b}${c}${d} `)
                    }
                }
            }
        }

    }
    console.log(result)
}
specialNumbers(["3"])