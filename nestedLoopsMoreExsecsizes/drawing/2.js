function nn (input){
let userNumber = Number(input[0]);
let result = "";

for ( let row = 0; row < userNumber; row++){
    for( let col = 0; col < userNumber; col++){
        result += "*";
    }
    console.log(result)
    result =""
}



}
nn(["4"])