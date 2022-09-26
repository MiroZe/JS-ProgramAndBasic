function pipeInPool(input){
let V = Number(input[0]);
let P1 = Number(input[1]);
let P2 = Number(input[2]);
let H = Number(input[3]);
let volumeForP1 = H * P1;
let volumeForP2 = H * P2;
let currentPool = volumeForP1 + volumeForP2
let percentofPool = (currentPool / V) * 100
let currentPercentForP1 = 100 / currentPool;
let percentForP1 = ((volumeForP1 / currentPool) * 100).toFixed(2);
let percentForP2 = ((volumeForP2 / currentPool) * 100).toFixed(2);
if (currentPool > V){
    console.log(`For ${H} hours the pool overflows with ${(currentPool - V).toFixed(2)} liters.`)
} else{
    console.log(`The pool is ${percentofPool} % full. Pipe 1: ${percentForP1}%. Pipe 2: ${percentForP2}%.`)


}

}

pipeInPool(["100","100","100","2.5"])