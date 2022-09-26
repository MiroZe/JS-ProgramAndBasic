function club(input){

    let index = 0;
    let profitTarget = Number(input[index]);
    index++;
    let result = 0;

    for( let i = 0; i <= profitTarget; i++){
        let coctailName = input[index];
        index++;
        let ordersPcs = Number(input[index]);
        index++;
        result = Number(coctailName.length) * ordersPcs
        
        
        
        }
        
            
        
        
    }

   


club(["500","Bellini","6","Bamboo","7","Party!"])
