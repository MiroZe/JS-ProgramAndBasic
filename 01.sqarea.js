function sqarea(input){

const b1 = Number (input[0]);
const b2 = Number (input[1]);
const h = Number (input[2]);
const face = Number( (b1 + b2) * h / 2 );
console.log(face.toFixed(2))



}
sqarea([8,13,7])