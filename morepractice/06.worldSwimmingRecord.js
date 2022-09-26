function worldSwimmingRecord(input) {
    const recordInSecond = Number(input[0]);
    const distance = Number(input[1]);
    const oneMtTimeSeconds = Number(input[2]);
    const resultinSeconds = Number(distance * oneMtTimeSeconds)
    const delay = Math.floor(distance / 15) * 12.50;
    let totalTime = resultinSeconds + delay;
    if ( totalTime < recordInSecond) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else{
        console.log(`No, he failed! He was ${Math.abs(recordInSecond - totalTime).toFixed(2)} seconds slower.`)
    }
    
}
worldSwimmingRecord([55555.67,3017,5.03])