function moving(input){

let index=0;
let wide = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let high = Number(input[index]);
index++;
let cartons = input[index];
index++
let volume = wide * length * high ;
let currentVolume = 0;
let isVolumeEnough = true;


while( cartons !== "Done"){
    let currentCartons = Number(cartons) ;
        
    currentVolume += currentCartons;
    let diff = Math.abs(currentVolume - volume );
    if(volume < currentVolume){
        isVolumeEnough = false;
        console.log(`No more free space! You need ${diff} Cubic meters more.`)
        break;
    }
    cartons = input[index];
    index++

}
if(isVolumeEnough){
    let diff = Math.abs(currentVolume - volume );
    console.log(`${diff} Cubic meters left.`);
}


}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
