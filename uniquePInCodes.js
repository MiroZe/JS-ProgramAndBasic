function uniquePinCodes (input){
let index= 0;
let n1Number = Number(input[index]);
index++;
let n2Number = Number(input[index]);
index++;
let n3Number = Number(input[index]);
let printLine = ""

for( let i = 1; i<= n1Number; i++){
    for( let k = 1; k <= n2Number;k++){
        for( let m = 1; m <= n3Number;m++){
            if (i % 2 === 0 && m % 2 === 0){
                if( k === 2 || k === 3 || k === 5 ){
                    printLine+=`${i} ${k} ${m} \n`
                }
                
            }
        }
    }

    



}
console.log(printLine)
}
uniquePinCodes(["8","2","8"]);