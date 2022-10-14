function combination (input){
let n = Number(input[0]);
let validcombination = 0;

for( i = 0; i <= n; i++){
    let x1 = i;
    for (k = 0 ; k <=n; k++){
        let x2 = k;
        for( l = 0; l<=n; l++){
            let x3 = l;
            if( x1 + x2 + x3 === n){
                validcombination++
                
            }
    } 
    } 
    
}

console.log(validcombination);

}
combination(["5"])