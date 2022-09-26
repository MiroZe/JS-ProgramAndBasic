function suitCaseLoad(input) {
  let index = 0;
  let capacity = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let suitcaseCounter = 0;
  let usedCapacity = capacity;
  let isAllLoaded = true;
  while (command !== "End") {
    let currentLoad = Number(command);
    suitcaseCounter++;
    if (usedCapacity <= currentLoad) {
      isAllLoaded = false;
      suitcaseCounter--;
      console.log("No more space!");
      break;
    }
    
    if (suitcaseCounter % 2 !== 0 && suitcaseCounter !== 1) {
      currentLoad *= 1.1;
    }
    usedCapacity -= currentLoad;

    command = input[index];
    index++;
  }
  
  if (isAllLoaded) {
    console.log("Congratulations! All suitcases are loaded!");
  }
  console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
  
}
suitCaseLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])

