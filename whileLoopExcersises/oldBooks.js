function oldBook(input){
    let index = 0;
    let searchedBookName = input[index];
    index++
    let checkedBookCounter = 0;
    let currentBookName = input[index];
    index++
    let isbookingFound = false

    while(currentBookName !== "No More Books"){
                
        if(searchedBookName === currentBookName){
            isbookingFound = true
          break;
            
        }
    checkedBookCounter++
       currentBookName=input[index];
       index++
    }
    if(isbookingFound){
        console.log(`You checked ${checkedBookCounter} books and found it.`)
    } else{
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBookCounter} books.`);
    }
}
oldBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

