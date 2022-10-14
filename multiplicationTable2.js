function multiplicationTable(){

    for(let i=1; i<=10; i++){
        let x = i
        for(let k = 1; k<=10; k++){
            let y = k;
            let result = x * y
            console.log(`${x} * ${y} = ${result}`)
        }
    }

}
multiplicationTable()