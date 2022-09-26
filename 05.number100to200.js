function number100to200 (input){

    const digit = Number(input[0]);
    if (digit < 100) {
        console.log ("Less than 100");
      }  else if ( digit > 200) {
            console.log("Greater than 200");
        
    } else {
        console.log("Between 100 and 200");
    }

}
number100to200([199])