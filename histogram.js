function histogram(input) {
  let digitCount = Number(input[0]);
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 1; i <= digitCount; i++) {
    let num = Number(input[i]);
    if (num < 200){
        p1Counter ++;
    }else if( num >=200 && num <= 399){
        p2Counter++
    }else if(num >=400 & num <=599){
        p3Counter++
    }else if(num >= 600 && num <=799){
        p4Counter++
    } else if( num >= 800){
        p5Counter++
    }
  }
  let p1Percent = p1Counter / digitCount * 100;
  let p2Percent = p2Counter / digitCount * 100;
  let p3Percent = p3Counter / digitCount * 100;
  let p4Percent = p4Counter / digitCount * 100;
  let p5Percent = p5Counter / digitCount * 100;
  console.log(`${p1Percent.toFixed(2)}%`)
  console.log(`${p2Percent.toFixed(2)}%`)
  console.log(`${p3Percent.toFixed(2)}%`)
  console.log(`${p4Percent.toFixed(2)}%`)
  console.log(`${p5Percent.toFixed(2)}%`)

}
histogram(["14","53",  "7","56","180","450","920","12","7","150","250",
  "680",
  "2",
  "600",
  "200",
]);
