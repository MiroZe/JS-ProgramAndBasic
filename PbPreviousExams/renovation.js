function renovation(input){
    let index = 0;
    let wallHigh = Number(input[index]);
    index++;
    let wallWide = Number(input[index]);
    index++;
    let unpaintedArea = Number(input[index]);
    index++;
    let totalWallsArea = wallHigh * wallWide * 4;
    let paintedArea = Math.ceil(totalWallsArea - (totalWallsArea * unpaintedArea /100));
    let paint = input[index];
    index++;
    let totalPaintLiters = 0;
    let isPaintEnough = false;

    while (paint !== "Tired!"){
        let currentPaint = Number(paint);
        totalPaintLiters += currentPaint;
        let diff = Math.abs(totalPaintLiters - paintedArea);
        if(totalPaintLiters > paintedArea){
            isPaintEnough = true;
            console.log(`All walls are painted and you have ${diff} l paint left!`)
            break;
        }
        if(diff === 0){
            isPaintEnough = true;
            console.log("All walls are painted! Great job, Pesho!" )
            break;
        } 

        paint = input[index];
        index++;
    }
    if(!isPaintEnough){
    let diff = Math.abs(totalPaintLiters - paintedArea);
    console.log(`${diff} quadratic m left.`)
    }
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])




