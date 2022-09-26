function aquarium(input) {
  let aquariumVolume = Number(input[0] * input[1] * input[2]);
  let volumeInLtr = Number(aquariumVolume / 1000);
  let usedAreaCm = input[3] / 100;
  let usedLtr = Number(volumeInLtr - usedAreaCm * volumeInLtr);

  console.log(usedLtr);
}
aquarium([105, 77, 89, 18.5]);
