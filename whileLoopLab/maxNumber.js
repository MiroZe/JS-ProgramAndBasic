function maxNumber(input){
let index = 0;
let num = input[index];
index++
let maxNumber = Number.MIN_SAFE_INTEGER;

while(num !== "Stop"){
    let currentNum = Number(num);
        if( currentNum > maxNumber ){
        maxNumber = currentNum
    }
    num = input[index];
    index++

}
console.log(maxNumber);

}
maxNumber(["-1",
"-2",
"Stop"])



