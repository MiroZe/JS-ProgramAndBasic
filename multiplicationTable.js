function multiplicationTable(input){
    let digit = Number(input[0]);
    let result = 0 ;
    for( i = 1; i<=10 ; i++){
        result = digit * i;
        console.log(`${i} * ${digit} = ${result}`)

    }


}
multiplicationTable(["9"])