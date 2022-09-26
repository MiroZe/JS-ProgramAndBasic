function salary(input){
    let index = 0;
    let tabPcs = Number(input[index])
    index++
    let money = Number(input[index])
    index++
    let isHaveSalary = true;

    for (let i=0 ; i<= tabPcs; i++){
        let tabName = input[index]
        index++
        switch(tabName){
            case "Facebook" : money -= 150;break;
            case "Instagram" : money  -= 100;break;
            case "Reddit" : money -= 50;break;
                
            }
        if(money <=0){
            console.log("You have lost your salary.")
            isHaveSalary = false
            break;
        }
        }
       
    if(isHaveSalary){
        console.log(money)

    }
  
    
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
