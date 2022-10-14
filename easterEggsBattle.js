function easterEggsBattle(input) {
  let index = 0;
  let firstPlayerEggs = Number(input[index]);
  index++;
  let secondPlayerEggs = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let isEggsNull = false;

  while (command !== "End") {
    let currentResult = command;
    switch (currentResult) {
      case "one":
        secondPlayerEggs--;
        break;
      case "two":
        firstPlayerEggs--;
        break;
    }

    if (firstPlayerEggs <= 0) {
      isEggsNull = true;
      console.log(
        `Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`
      );
      break;
    } else if (secondPlayerEggs <= 0) {
      isEggsNull = true;
      console.log(
        `Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (!isEggsNull) {
    console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    console.log(`Player two has ${secondPlayerEggs} eggs left.`);
  }
}
easterEggsBattle(["2", "6", "one", "two", "two"]);
