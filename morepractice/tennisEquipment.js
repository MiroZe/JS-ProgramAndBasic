function tennisEquipment(input){
let racketPrice = Number(input[0]);
let racketPcs = Number(input[1]);
let trainersPcs = Number(input[2]);
let trainerPrice = racketPrice / 6;
let costs = racketPcs * racketPrice + trainerPrice * trainersPcs;
let otherEquipment = costs * 0.2;
let totalCosts = costs + otherEquipment;
let playerCosts = totalCosts / 8;
let sponsorsCosts = totalCosts - playerCosts;
console.log(`Price to be paid by Djokovic ${Math.floor(playerCosts)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(sponsorsCosts)}`);


}
tennisEquipment(["386","7","4"])