function minNumber(input){
    let index = 0;
    let num = input[index]
    index++
    let minNum = Number.MAX_SAFE_INTEGER

    while(num !== "Stop"){
        let currentNumber = Number(num);
        if(currentNumber < minNum){
            minNum = currentNumber
        }
        num = input[index];
        index++

    }
    console.log(minNum)

}
minNumber(["-1",
"-2",
"Stop"])

