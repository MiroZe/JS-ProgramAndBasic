function bonusScore(input){

const digit = Number(input[0]);
let bonus = 0
let addBonus = 0

if ( digit <100 ) {
    bonus = 5
} else if (digit >= 1000) {
    bonus = digit * 0.1
} else {
    bonus = digit * 0.2
}
if (digit % 2 == 0) {
    addBonus = bonus +1
} else if( digit % 10 == 5){
    addBonus = bonus + 2
} else {
    addBonus = bonus
}
console.log(addBonus);
console.log(digit + addBonus);
}
bonusScore([15875]);