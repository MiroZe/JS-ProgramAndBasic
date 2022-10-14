function squareOfStars(n) {
let symbol = '* ';

for(let i = 1; i <= n; i++) {
    let printLine = `${symbol.repeat(n)}  `
   
    console.log(printLine);

}

}
squareOfStars(6)