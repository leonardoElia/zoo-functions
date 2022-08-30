const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let crianca = 0;
  let idoso = 0;
  let adulto = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      crianca += 1;
    } if (element.age >= 18 && element.age < 50) {
      adulto += 1;
    } if (element.age >= 50) {
      idoso += 1;
    }
  });
  return { child: crianca, adult: adulto, senior: idoso };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') {
    return 0;
  }
  const chaves = Object.keys(entrants);
  if (chaves.length <= 0) {
    return 0;
  }
  const quantidadeDePessoas = countEntrants(entrants);
  const { child, adult, senior } = quantidadeDePessoas;
  const soma = (child * 20.99) + (adult * 49.99) + (senior * 24.99);
  return soma;
}

module.exports = { calculateEntry, countEntrants };
