function paintingEggs(input){
let eggsSize = input[0];
let eggsColor = input[1];
let lots = Number(input[2]);
let price = 0;
let totalPrice = 0

switch(eggsSize){
    case "Large":
        switch(eggsColor){
            case "Red":     price = lots * 16 ;
                            totalPrice = price *=0.65;break;
           case "Green":   price = lots * 12 ;
                            totalPrice = price *=0.65 ;break;
            case "Yellow" :  price = lots * 9 ; 
                            totalPrice = price *=0.65;break;     
            }break;
     case "Medium":
                switch(eggsColor){
                    case "Red":     price = lots * 13 ;
                                    totalPrice = price *=0.65;break;
                   case "Green":   price = lots * 9 ;
                                    totalPrice = price *=0.65 ;break;
                    case "Yellow" :  price = lots * 7 ; 
                                    totalPrice = price *=0.65;break;     
                    }break;
     case "Small":
                        switch(eggsColor){
                            case "Red":     price = lots * 9 ;
                                            totalPrice = price *=0.65;break;
                           case "Green":   price = lots * 8 ;
                                            totalPrice = price *=0.65 ;break;
                            case "Yellow" :  price = lots * 5 ; 
                                            totalPrice = price *=0.65;break;     
                            }break;
  
}

console.log(`${totalPrice.toFixed(2)} leva.`)
}

paintingEggs(["Small","Yellow","3"])