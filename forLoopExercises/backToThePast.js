function backToThePast(input) {
  let money = Number(input[0]);
  let year = Number(input[1]);
  let costs = 0;
  let currentYear = 18;

  for (let i = 1800; i <= year; i++) {
    
    if (i % 2 === 0) {
      
      costs += 12000;
    } else {
     costs += 12000 + currentYear * 50;
    }
    currentYear++;
  }

  let diff = Math.abs(money - costs);
  if (money >= costs) {
    console.log(
      `Yes! He will live a carefree life and will have ${diff.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  }
}
backToThePast(["100000.15", "1808"]);
