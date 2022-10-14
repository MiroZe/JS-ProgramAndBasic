function cinemaTicket(input) {
  let index = 0;
  let command = input[index];
  index++;
  let studentTickets = 0;
  let standartTickets = 0;
  let kidTickets = 0;

  while (command !== "Finish") {
    let currentName = command;
    let freeSeats = Number(input[index]);
    index++;
    let ticketType = input[index];
    index++;
    let totalSoldTickets = 0;
    while (ticketType !== "End") {
      switch (ticketType) {
        case "standard":
          standartTickets++;
          totalSoldTickets++;
          break;
        case "student":
          studentTickets++;
          totalSoldTickets++;
          break;
        case "kid":
          kidTickets++;
          totalSoldTickets++;
          break;
      }
      if (freeSeats <= totalSoldTickets) {
        break;
      }

      ticketType = input[index];
      index++;
    }
    let average = (totalSoldTickets / freeSeats) * 100;
    console.log(`${currentName} - ${average.toFixed(2)}% full.`);
    command = input[index];
    index++;
  }
  let totalSoldTickets = studentTickets + standartTickets + kidTickets;
  let studentP = (studentTickets / totalSoldTickets) * 100;
  let standartP = (standartTickets / totalSoldTickets) * 100;
  let kidP = (kidTickets / totalSoldTickets) * 100;

  console.log(`Total tickets: ${totalSoldTickets}`);
  console.log(`${studentP.toFixed(2)}% student tickets.`);
  console.log(`${standartP.toFixed(2)}% standard tickets.`);
  console.log(`${kidP.toFixed(2)}% kids tickets.`);
}
cinemaTicket([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
