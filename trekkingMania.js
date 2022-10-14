function trekkingMania(input) {
    let index = 0;
    let groupCounter = Number(input[index]);
    index++;
    let totalClimbers = 0;
    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestCLimbers = 0;
    for (let i = 0; i < groupCounter; i++) {
        let climberCounter = (input[index]);
        index++
        totalClimbers = Number(climberCounter);

        if (totalClimbers <= 5) {
            musalaClimbers += Number(climberCounter);
        } else if (totalClimbers >= 6 && totalClimbers <= 12) {
            monblanClimbers += Number(climberCounter)
        } else if (totalClimbers >= 13 && totalClimbers <= 25) {
            kilimandjaroClimbers += Number(climberCounter)
        } else if (totalClimbers >= 26 && totalClimbers <= 40) {
            k2Climbers += Number(climberCounter)
        } else if (totalClimbers >= 41) {
            everestCLimbers += Number(climberCounter)

        }
        totalClimbers = musalaClimbers + monblanClimbers + kilimandjaroClimbers + k2Climbers + everestCLimbers

    }
    let musalaPercentage = musalaClimbers / totalClimbers * 100;
    let monblanPercentage = monblanClimbers / totalClimbers * 100;
    let kilimandjaroPercentage = kilimandjaroClimbers / totalClimbers * 100;
    let k2Percentage = k2Climbers / totalClimbers * 100;
    let everestPercentage = everestCLimbers / totalClimbers * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`)
    console.log(`${monblanPercentage.toFixed(2)}%`)
    console.log(`${kilimandjaroPercentage.toFixed(2)}%`)
    console.log(`${k2Percentage.toFixed(2)}%`)
    console.log(`${everestPercentage.toFixed(2)}%`)
}
trekkingMania(["5","25","41","31","250","6"])

