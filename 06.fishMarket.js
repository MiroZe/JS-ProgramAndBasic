function fishMarket(input){
const skumriaPrice = Number(input[0]);
const cacaPrice = Number(input[1]);
const palamudPrice = Number(skumriaPrice * 0.60 + skumriaPrice);
const midiPrice = 7.50;
const safridPrice = Number(cacaPrice * 0.8 + cacaPrice)
let totalPalamudPrice = palamudPrice * (input[2]);
const totalMidiPrice = Number( midiPrice * (input[4]));
const totalSafridPrice = Number(safridPrice * (input[3]));
console.log((totalMidiPrice + totalPalamudPrice + totalSafridPrice).toFixed(2));


}
fishMarket([5.55,3.57,4.3,3.6,7])