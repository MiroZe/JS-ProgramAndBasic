function basketballEquipment(input) {
  const tax = Number(input[0]);
  const sneakers = Number(tax - (input[0] * 40) / 100);
  const set = Number(sneakers - (sneakers * 20) / 100);
  const ball = Number(set / 4);
  const accessoaries = Number(ball / 5);
  let yearTax = Number(tax + sneakers + set + ball + accessoaries);

  console.log(yearTax);
}
basketballEquipment([365]);
