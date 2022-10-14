function equalmatrix (arr) {
  

  for(let i =0 ; i < arr.length; i++) {
    let currentMatrix = arr[i].toString();
    let lineSum = 0;
    let columnSum = 0;
    let newMatrix = currentMatrix.split(',')
     for(let element of newMatrix) {
      let number = Number(element);
      lineSum += number
      
     }
     console.log(lineSum);

  }
  
    
  

}


equalmatrix([[4, 5, 6],
            [6, 5, 4], 
            [5, 5, 5]])
  