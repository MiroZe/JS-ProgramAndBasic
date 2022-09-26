function fitnessCenter(input) {
  let index = 0;
  let people = Number(input[index]);
  index++;
  let backTraining = 0;
  let chestTraining = 0;
  let absTraining = 0;
  let legsTrainig = 0;
  let proteinShake = 0;
  let proteinBar = 0;

  for (let i = 0; i < people; i++) {
    let currentTraining = input[index];
    index++;
    switch (currentTraining) {
      case "Back":
        backTraining++;
        break;
      case "Chest":
        chestTraining++;
        break;
      case "Legs":
        legsTrainig++;
        break;
      case "Abs":
        absTraining++;
        break;
      case "Protein shake":
        proteinShake++;
        break;
      case "Protein bar":
        proteinBar++;
        break;
    }
  }
  let trainingPeople = backTraining + chestTraining + absTraining + legsTrainig;
  let proteinPeople = proteinBar + proteinShake;
  let trainingP = (trainingPeople / people) * 100;
  let proteinP = (proteinPeople / people) * 100;

  console.log(`${backTraining} - back`);
  console.log(`${chestTraining} - chest`);
  console.log(`${legsTrainig} - legs`);
  console.log(`${absTraining} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${trainingP.toFixed(2)}% - work out`);
  console.log(`${proteinP.toFixed(2)}% - protein`);
}
fitnessCenter([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
