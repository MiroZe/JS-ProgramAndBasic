function lunchBreak(input) {
  const serialName = input[0];
  const episodeLenght = Number(input[1]);
  const breakTime = Number(input[2]);
  const lunchTime = breakTime / 8;
  const restTime = breakTime / 4;
  let totalTime = breakTime - lunchTime - restTime;
  let remainTime = Math.abs(episodeLenght - totalTime);

  if (episodeLenght <= totalTime) {
    console.log(
      `You have enough time to watch ${serialName} and left with ${Math.ceil(
        remainTime
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${serialName}, you need ${Math.ceil(
        remainTime
      )} more minutes.`
    );
  }
}

lunchBreak(["Teen Wolf", "48", "60"]);
