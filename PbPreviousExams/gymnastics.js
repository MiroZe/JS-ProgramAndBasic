function gymnastics(input) {
    let country = input[0];
    let discipline = input[1];
    let score = 0;

    switch (country) {
        case "Russia":
            switch (discipline) {
                case "ribbon": score = 9.10 + 9.40; break;
                case "hoop": score = 9.30 + 9.80; break;
                case "rope": score = 9.60 + 9.00; break;
            }break;
        case "Bulgaria":
            switch (discipline) {
                case "ribbon": score = 9.60 + 9.40; break;
                case "hoop": score = 9.55 + 9.75; break;
                case "rope": score = 9.50 + 9.40; break;
            }break;
        case "Italy":
            switch (discipline) {
                case "ribbon": score = 9.20 + 9.50; break;
                case "hoop": score = 9.45 + 9.35; break;
                case "rope": score = 9.70 + 9.15; break;
            }break;
    }

    let diff = 20 - score;
    let percent = diff / 20 * 100
    console.log(`The team of ${country} get ${score.toFixed(3)} on ${discipline}.`);
    console.log(`${percent.toFixed(2)}%`);

}
gymnastics(["Italy",
    "hoop"])
