function trainingLab(input){
const hallLenghtMt = Number(input[0]);
const hallWightMt = Number(input[1]);
const hallLenghtCm = hallLenghtMt * 100;
const hallWightCm = hallWightMt * 100 -100;
const oneWorkstation = 11 * 70
const totalWorkstation = hallWightCm % oneWorkstation;



console.log(totalWorkstation)

    
}
trainingLab([15,8.9]);