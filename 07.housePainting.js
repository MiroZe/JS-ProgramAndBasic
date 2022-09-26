function housePainting(input){
    const houseHigh = Number(input[0]);
    const wallLenght = Number(input[1]);
    const roofLenght = Number(input[2]);
    const doorArea = 2.4;
    const windowArea = 4.5;
    const wallArea  = (2 * houseHigh * houseHigh)+(2 * wallLenght*houseHigh) - doorArea - windowArea
    const greenPaint = wallArea / 3.4;
    const roofArea = (2 * wallLenght * houseHigh) + 2 * (houseHigh * roofLenght / 2);
    const redPaint = roofArea / 4.3


console.log(greenPaint.toFixed(2));
console.log(redPaint.toFixed(2));


} 
housePainting([10.25,15.45,8.88])