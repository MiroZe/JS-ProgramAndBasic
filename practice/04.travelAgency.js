function travelAgency(input) {
  let cityName = input[0];
  let packetType = input[1];
  let discountVip = input[2];
  let days = Number(input[3]);
  let priceForday = 0;
  if ( days > 7){
      days = days -1
  } 
   
  if( cityName !== "Bansko" && cityName !== "Borovets" && cityName !== "Varna" && cityName !== "Burgas"){
      console.log("Invalid input!")
  }
  if ( packetType !== "noEquipment" && packetType !== "withEquipment" && packetType !== "noBreakfast" && packetType !== "withBreakfast"){
    console.log("Invalid input!")
  }
  if(days < 1){
    console.log("Days must be positive number!")
  } else {
    switch(cityName){
      
    case "Bansko":
    case "Borovets":
        if(packetType === "withEquipment"){
            priceForday = 100
            if(discountVip === "yes"){
                priceForday *=0.9
            }
        } else if(packetType === "noEquipment"){
            priceForday = 80
            if(discountVip === "yes"){
                priceForday *=0.95
            }
    let totalSum = priceForday * days
    
    console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`)
  }
    case  "Varna" :
    case "Burgas" :
        if(packetType === "withBreakfast"){
            priceForday = 130;
            if(discountVip === "yes"){
                priceForday *=0.88
            }
        } else if( packetType === "noBreakfast"){
            priceForday = 100;
            if(discountVip === "yes"){
                priceForday *= 0.93
            }
        }
    let totalSum = priceForday * days
    
    console.log(`The price is ${totalSum.toFixed(2)}lv! Have a nice time!`)
}
  }
}
travelAgency(["Varna","withEquipment","no","2"])