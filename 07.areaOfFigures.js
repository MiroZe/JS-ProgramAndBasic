function areaOfFigures(input){

    const kind = input[0];
    const a = Number(input[1]);
    if (kind === "square") {
        const a = Number(input[1]);
        console.log((a * a).toFixed(3))
} else if (kind === "rectangle"){
    let b = Number(input[2]); 
    console.log(( a * b).toFixed(3));
} else if (kind === "circle") {
    console.log((Math.PI * a * a).toFixed(3));
} else if (kind === "triangle") {
    let b = Number(input[2]);
    console.log( (a * b  / 2).toFixed(3));
}


}
areaOfFigures(["triangle",4.5,20])