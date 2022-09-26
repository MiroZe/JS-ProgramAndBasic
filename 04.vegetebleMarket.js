function vegetableMarket(input){

        const vegetablePrice  = Number(input[0]);
        const fruitprice = Number(input[1]);
        const vegetableKgs = Number(input[2]);
        const fruitKgs = Number(input[3]);
        let totalPriceBgn = Number((vegetablePrice * vegetableKgs) + (fruitKgs * fruitprice));
        const bgnEurRate = 1.94
        let totalPriceEur = totalPriceBgn / bgnEurRate;
        console.log(totalPriceEur.toFixed(2));

}
vegetableMarket([1.5,2.5,10,10])
    