function building(input){
    let index = 0;
    let floor = Number(input[index]);
    index ++;
    let rooms = Number(input[index]);
    

    for( let i = floor; i>0 ; i--){
        let buff =""
        for( k = 0; k < rooms; k++){
            
            if(i === floor){
                buff += `L${i}${k} `
                
            }else if( i % 2 === 0){
                buff += `O${i}${k} `
                
            } else{
                buff += `A${i}${k} `
                
            }
            
            
        }
        console.log(buff)
    }
    
}
building(["6", "4"])