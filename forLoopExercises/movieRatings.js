function movieRatings(input){

let index = 0;
let moviesPcs = Number(input[index]);
index++;
let totalRating = 0;
for(let i=0; i < moviesPcs;i++){
    let movieName = input[index];
    index++;
    let movieRating = Number(input[index]);
    index++;
    totalRating+=movieRating
    
}
let averageRating = totalRating / moviesPcs
console.log(averageRating)
}
movieRatings(["5","A Star is Born","7.8","Creed 2","7.3","Mary Poppins","7.2","Vice","7.2","Captain Marvel","7.1"])