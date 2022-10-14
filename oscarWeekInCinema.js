function oscarWeekInCinema(input){
    let movieName = input[0];
    let typeOfSaloon = input[1];
    let soldTickets = Number(input[2]);
    
    let income = 0;


    switch (movieName){

        case "A Star Is Born" :
            switch(typeOfSaloon){
                case "normal": income = 7.50 * soldTickets;break;
                case "luxury": income = 10.50 * soldTickets;break;
                case "ultra luxury":income = 13.50 * soldTickets;break;
            }break;
        case "Bohemian Rhapsody" :
            switch(typeOfSaloon){
                case "normal": income = 7.35 * soldTickets;break;
                case "luxury": income = 9.45 * soldTickets;break;
                case "ultra luxury":income = 12.75 * soldTickets;break;
            }break;
        case "Green Book" :
            switch(typeOfSaloon){
                case "normal": income = 8.15 * soldTickets;break;
                case "luxury": income = 10.25 * soldTickets;break;
                case "ultra luxury":income = 13.25 * soldTickets;break;
                
            }break;
        case "The Favourite":
            switch(typeOfSaloon){
                case "normal": income = 8.75 * soldTickets;break;
                case "luxury": income = 11.55 * soldTickets;break;
                case "ultra luxury":income = 13.95 * soldTickets;break;
            }break;
    }
    console.log(`${movieName} -> ${income.toFixed(2)} lv.`)

}
oscarWeekInCinema(["Green Book",
"normal",
"63"])
