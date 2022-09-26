function zooshop(input){
    let dogFood = 2.5;
    let catFood = 4;
    let resultD = dogFood * Number(input[0]);
    let resultC = catFood * Number(input[1]);
    let totalResult = Number(resultD + resultC)
    
    console.log(`${totalResult} lv.`)
    
}

zooshop([13,9])