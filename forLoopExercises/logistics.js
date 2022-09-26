function logistics(input){
let index = 0;
let loadCounter = Number(input[index]);
index++
let weightCounter = 0;
let weightPrice = 0;
for( let i=0; i < loadCounter;i++){
    
    let weight = Number(input[index]);
    index++
    if(weight <=3 ){
        weightPrice = weight *  200;
    }else if(weight >= 4 && weight <=11 ){
        weightPrice = weight * 175;
    } else if(weight >= 12){
        weightPrice = weight * 120;
    }
    weightCounter+=weightCounter
}
 
console.log(weightCounter)

}
logistics(["4","1","5","16","3"])
