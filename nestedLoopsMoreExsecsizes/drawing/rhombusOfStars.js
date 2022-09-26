function rhombusOfStars(input){

let userNumber = Number(input[0]);

for(row = 1; row <= userNumber; row++){
    let line = ""
    for( let col = 1; col <= userNumber - row; col++ ){
        line += " " 
    }
    line += "*"
    for( let col = 1; col < row; col++){
        line += " *"
    }
   console.log(line)
   
}
for( row2 = 1 ; row2 <= userNumber - 1; row2++){
    let line2 = "";
    line2 += " *";
    console.log(line2);

}

}
rhombusOfStars(["4"])