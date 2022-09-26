function spaceship(input) {
  let shipWidth = Number(input[0]);
  let shipLength = Number(input[1]);
  let shipHight = Number(input[2]);
  let averageAstrounautHight = Number(input[3]);

  let oneAstronautRoom = 2 * 2 * (averageAstrounautHight + 0.4);
  let shipSize = shipWidth * shipLength * shipHight;
  let astronautPcs = Math.floor(shipSize / oneAstronautRoom);
  if (astronautPcs >= 3 && astronautPcs <= 10) {
    console.log(`The spacecraft holds ${astronautPcs} astronauts.`);
  } else if (astronautPcs < 3) {
    console.log("The spacecraft is too small.");
  } else {
    console.log("The spacecraft is too big.");
  }
}
spaceship(["3", "3", "4", "1.68"]);
