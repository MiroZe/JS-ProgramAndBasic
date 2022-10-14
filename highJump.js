function highJump(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let startJump = target - 30;
  let totalJumps = 0;
  
  index++;                       //"225", "224", "225", "228", "231", "235", "234", "235"
  let jumpedHigh = 0;
  let isTargetCovered = true;
  while (jumpedHigh <= target) {
    for (let i = 1; i <= 3; i++) {
        currentJump = Number(input[index])
        index++;
        let unsucessJump = 0;
      if (startJump <= currentJump) {
        startJump += 5;
        totalJumps++;
        jumpedHigh = currentJump;
        } else {
        unsucessJump++;
        totalJumps++
   
      }
      if (unsucessJump === 3) {
        isTargetCovered = false;
        break;
      }
    }
    currentJump = Number(input[index]);
    index++;
  }
   if (isTargetCovered) {
    console.log(
      `Tihomir succeeded, he jumped over ${target}cm after ${totalJumps} jumps.`
    );
  } else {
    console.log(`Tihomir failed at ${currentJump}cm after ${totalJumps} jumps`);
  }
}
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
