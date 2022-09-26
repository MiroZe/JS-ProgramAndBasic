function oscars (input){
let index = 0;
let actorsName = input[index];
index++;
let academyPoints = Number(input[index]);
index++;
let juryCount = Number(input[index]);
index++;

for(let i=0; i< juryCount;i++){
   let juryName = input[index];
   index++
   let juryPoints = Number(input[index]);
   index++
   let tempPoints = Number(juryName.length * juryPoints)/2;
   academyPoints += tempPoints
    if (academyPoints > 1250.50){
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
        break;

    }
}
let difference = 1250.50 - academyPoints
if( academyPoints < 1250.50){
    console.log(`Sorry, ${actorsName} you need ${difference.toFixed(1)} more!`)
}


}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
