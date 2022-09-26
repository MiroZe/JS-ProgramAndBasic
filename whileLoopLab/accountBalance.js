function accountBalance(input){
    let index = 0;
    let payment = input[index];
    index++
    
    let balance = 0;

    while(payment !== "NoMoreMoney"){
        let currentPayment = Number(payment);
        if(currentPayment < 0){
            console.log("Invalid operation!" )
            break;
        }
        balance += currentPayment;
        console.log(`Increase: ${currentPayment.toFixed(2)}`)
        payment = input[index]
        index++
        
    }
    console.log(`Total: ${balance.toFixed(2)}`)

}
accountBalance(["120",
"45.55",
"-150"])


