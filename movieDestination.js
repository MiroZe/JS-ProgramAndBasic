function movieDestination(input){

     let budget = Number(input[0]);
     let destination = input[1];
     let season = input[2];
     let days = Number(input[3]);
     let moviePrice = 0;

     switch(destination){
        case "Dubai": 
            switch(season){
                case  "Winter" : moviePrice = 31500; break;
                case "Summer" : moviePrice = 28000; break;
            }break;
        case "Sofia":
            switch(season){
                case  "Winter" : moviePrice = 21250 ; break;
                case "Summer" : moviePrice = 15625 ; break;
            }break;
        case "London" :
            switch(season){
            case  "Winter" : moviePrice = 24000 ; break;
            case "Summer" : moviePrice = 20250 ; break;

     }break;
     

    }
    let totalPrice = moviePrice * days;
    let diff = Math.abs(budget - totalPrice);
    if(budget >= totalPrice){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    }else{
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination(["200000",
"London",
"Summer",
"7"])


