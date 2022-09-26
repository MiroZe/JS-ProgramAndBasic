function circleAreaAndPerimeter(input){

const r = Number(input[0]);
const d = r * 2 ;
const circleArea  = r *r * Math.PI;
const circlePerimeter = 2 * Math.PI * r
console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));

}
circleAreaAndPerimeter([4.5])