function numDevideBy9(input){
let n1 = Number(input[0]);
let n2 = Number(input[1]);
let sum = 0;
let outputNumbers = "i"
for(let i = n1; i < n2 ;i++ ){
    if (i % 9 === 0){
    sum = i + sum;
    
    
    
}

}

console.log(`The sum of the digits is:${sum}`);
console.log(outputNumbers);
}
numDevideBy9(["100", "200"])