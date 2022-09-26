function barcodeGenerator(input) {
  let n1 = input[0];
  let n2 = input[1];
  let n1a = Number(n1[0]);
  let n1b = Number(n1[1]);
  let n1c = Number(n1[2]);
  let n1d = Number(n1[3]);
  let n2a = Number(n2[0]);
  let n2b = Number(n2[1]);
  let n2c = Number(n2[2]);
  let n2d = Number(n2[3]);
  let result = "";

  for (let i = n1a; i <= n2a; i++) {
    for (let k = n1b; k <= n2b; k++) {
       for (let l = n1c; l <= n2c; l++) {
          for (let m = n1d; m <= n2d; m++) {
          if (i % 2 !== 0 && k % 2 !== 0 && l %2 !==0 && m % 2 !== 0) {
            result +=`${i}${k}${l}${m} `
            
          }
        }
      }
    }
    
  }
  console.log(result);
}
barcodeGenerator(["3256",
"6579"])

