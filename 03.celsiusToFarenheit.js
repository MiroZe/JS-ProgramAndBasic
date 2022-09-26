function celsiusToFarenheit(input){



const cels = Number(input[0]);
let faren = Number(cels * 1.8 + 32);
console.log(faren.toFixed(2));

}
celsiusToFarenheit([0])