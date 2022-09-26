function books(input){

let pages = Number(input[0]);
let pgsHrs = Number(input[1]);
let days = Number(input[2]);
let totHrs = pages / pgsHrs /days;
console.log(totHrs)

}
books([432,15,4])