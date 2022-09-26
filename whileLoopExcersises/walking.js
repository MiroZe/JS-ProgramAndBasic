function walking(input){
    
    let index = 0;
    let steps = input[index];
    index++;
    let target = 10000;
    let totalSteps = 0;
    
    while(steps !== "Going home"){
        
        let currentSteps  = Number(steps);
        totalSteps += currentSteps;
        if(totalSteps >= target){
            break;
        }
        steps = input[index];
        index++;
        
    }
    if (steps === "Going home"){
        let currentSteps = Number(input[index]);
        index++;
        totalSteps += currentSteps
    }
    let diff = Math.abs(target - totalSteps);
    if( target > totalSteps){
        console.log(`${diff} more steps to reach goal.`);

    }else{
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }


}
walking(["1000",
"1500",
"2000",
"6500"])

