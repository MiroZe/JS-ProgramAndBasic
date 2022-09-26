function radianToDegrees(input){

let radians = Number(input[0]);
let graduses = radians * 180 /Math.PI;
console.log(graduses);

}
radianToDegrees(["3.1416"])