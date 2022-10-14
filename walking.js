function walking(input){

let index = 0;
let steps = input[index];
index++
let totalSteps = 0;
let isGoalReached = false;



while(totalSteps < 10000){
    let currentSteps = steps;
        
    currentSteps = Number(currentSteps);
    totalSteps += currentSteps;
    steps = input[index];
    index++;
    if(currentSteps === "Going home"){
        continue;
    }
       
          
    
    
}

if(isGoalReached){
    console.log(`${10000 - totalSteps} more steps to reach goal."`);
}else{
    console.log("Goal reached! Good job!");
    console.log(`${totalSteps - 10000} steps over the goal!`);
}




}
walking(["1500","300","2500","3000","Going home","200"])



