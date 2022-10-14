function easterTrip(input){
 let destination = input[0];
 let dates = input[1];
 let nights = Number(input[2]);
 let priceForNight  = 0;
 switch(destination){
        case "France":
            if (dates === "21-23"){
                priceForNight = 30
            }else if ( dates === "24-27"){
                priceForNight = 35
            }else if ( dates === "28-31"){
                priceForNight = 40

 }break;
    case "Italy":
        if (dates === "21-23"){
        priceForNight = 28
    }else if ( dates === "24-27"){
        priceForNight = 32
    }else if ( dates === "28-31"){
        priceForNight = 39
    }break;
    case "Germany":
        if (dates === "21-23"){
        priceForNight = 32
    }else if ( dates === "24-27"){
        priceForNight = 37
    }else if ( dates === "28-31"){
        priceForNight = 43
    }break;
}
    let priceForTrip = nights * priceForNight
    console.log(`Easter trip to ${destination} : ${priceForTrip.toFixed(2)} leva.`)
  
 }
 easterTrip(["France",
 "28-31",
 "8"])