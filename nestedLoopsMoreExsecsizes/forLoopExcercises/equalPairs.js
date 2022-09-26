function equalPairs(input) {
  let index = 0;
  let pairs = Number(input[index]);
  index++;
  let firstNumber = Number(input[index]);
  index++;
  let secondNumber = Number(input[index]);
  index++;
  let firstSum = firstNumber + secondNumber;
  let firstDiff = firstSum;
  let maxDiff =0;
  let secondSum = 0;


  for(let i = 0; i < pairs - 1; i++){
  let currentNumber = Number(input[index]);
  index++;
  let currentNumber2 = Number(input[index]);
  index++;
  let currentSum = currentNumber + currentNumber2;

  firstDiff = Math.abs(currentSum - firstSum)
  if(firstDiff > maxDiff){
    maxDiff = firstDiff
  }
  firstSum = currentSum
  secondSum = currentSum
  }
  if(firstSum === secondSum){
    console.log(`Yes, value=${firstSum}`);
  }else {
    console.log(`No, maxdiff=${firstDiff}`);
  }
    
 
    
  
}
equalPairs(["1","5","5"]);
