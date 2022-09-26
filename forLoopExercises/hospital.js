function hospital(input){
let index = 0;
let days = Number(input[index]);
index++
let currentDay = 1;
let doctors = 7;
let treatedPatients = 0;
let untreatedPatients = 0;
for(let i= 0; i<days;i++){
    let patients = Number(input[index]);
    index++;
    if((doctors - patients) >= 0){
        treatedPatients += patients;
    } else if(doctors - patients <0){
        untreatedPatients += patients - doctors;
        treatedPatients += doctors
        ;
    }
    currentDay++;
    if(currentDay % 3 === 0 && untreatedPatients > treatedPatients){
        doctors++
    }


}
console.log(`Treated patients: ${treatedPatients}.`)
console.log(`Untreated patients: ${untreatedPatients}.`)
}
hospital(["6","25","25","25","25","25","2"])

//"6","25","25","25","25","25","2"
