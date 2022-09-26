function cake(input){

let index = 0;
let wide = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let cakePcs = input[index];
index++
let givenPcs = 0;
let cakeSize = wide * length;
let isCakeEnough = true;

while(cakePcs !== "STOP"){
    let currentCakePcs = Number(cakePcs);
    givenPcs += currentCakePcs;
    let diff = Math.abs(cakeSize - givenPcs);
    if(cakeSize < givenPcs){
        isCakeEnough = false;
        console.log(`No more cake left! You need ${diff} pieces more.`)
        break;
    }
    cakePcs = input[index];
    index++;

}
if(isCakeEnough){
let diff = Math.abs(cakeSize - givenPcs);
console.log(`${diff} pieces are left.`)
}


}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
