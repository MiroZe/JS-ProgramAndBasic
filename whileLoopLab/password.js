function password(input){
    let index = 0;
    let username = input[index];
    index++
    let pass = input[index];
    index++
    let currentPass = 0;
    while( pass !== currentPass){
    
    
    currentPass = input[index];
    index++

    }
    console.log("Welcome " + username+"!")
}

password
(["Gosho",
"secret",
"secret"])
