function highJump(input){

let index=0;
let target = Number(input[index]);
index++;
let startJump = target - 30;

let jumpCount = 0;

for( let i = startJump; i<= target; i++){
    let currentJump = Number(input[index]);
    index++
    
        for(m = currentJump; m <= currentJump;m+=5){
            console.log(m);
        }

    }
    
    
    }
    
    

highJump(["231","205","212","213","228","229","230","235"])
