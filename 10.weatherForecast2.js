function weatherForecast2(input){
    const currentTemp = Number(input[0]);
   if ( currentTemp < 5 ){
       console.log("unknown")
   } else if (currentTemp < 12){
    console.log("Cold")
   }else if (currentTemp < 15){
        console.log("Cool")
   } else if (currentTemp <20.1){
    console.log("Mild")
   } else if (currentTemp <25.9){
    console.log("Warm")
   } else if (currentTemp <35){
    console.log("Hot")
   } else {
       console.log("unknown")
   }
   }
weatherForecast2([20])