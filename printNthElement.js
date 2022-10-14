function printElement(arr) {
  let arrL = arr.length;
  let step = Number(arr[arr.length - 1]);
  let newArr = [];

  for (let index = 0; index < arrL - 1; index += step) {
    newArr.push(arr[index]);
  }
  console.log(newArr.join(" "));
}
printElement(["5", "20", "31", "4", "20", "2"]);
