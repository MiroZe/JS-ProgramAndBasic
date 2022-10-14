function movieRatings(input){
    let index = 0;
    let moviesPcs = Number(input[index]);
    index++;
    let nameOfMovieHigh = "";
    let raitngOfMovieHigh = Number.MIN_SAFE_INTEGER;
    let nameOfMovieLowest = ""
    let raitngOfMovieLowest = Number.MAX_SAFE_INTEGER;
    let sumOfratings = 0;

    for(let i = 0; i < moviesPcs; i++ ){
        let movieName = input[index];
        index++
        let movieRating = Number(input[index]);
        index++
        sumOfratings += movieRating;
        let currentRating = movieRating;
        let currentMovie = movieName;
        if(currentRating > raitngOfMovieHigh){
            raitngOfMovieHigh = currentRating
            nameOfMovieHigh = currentMovie
        } 
        if(currentRating < raitngOfMovieLowest){
            raitngOfMovieLowest = currentRating;
            nameOfMovieLowest = currentMovie
        }
              
    }
    let avgRating = sumOfratings / moviesPcs;
    console.log(`${nameOfMovieHigh} is with highest rating: ${raitngOfMovieHigh.toFixed(1)}`);
    console.log(`${nameOfMovieLowest} is with lowest rating: ${raitngOfMovieLowest.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}
    movieRatings(["3","Interstellar","8.5","Dangal","8.3","Green Book","8.2"])
    



