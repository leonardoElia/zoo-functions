const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const animaisQuantidade = {};
    species.forEach((elemento) => {
      animaisQuantidade[elemento.name] = elemento.residents.length;
    });
    return animaisQuantidade;
  }
  const animalDigitado = animal.specie;
  const objetoAnimal = species.find((obejeto) => obejeto.name === animalDigitado);
  if (animal.sex === 'female') {
    const femenino = objetoAnimal.residents.filter((elemento) => elemento.sex === 'female');
    return femenino.length;
  }
  if (animal.sex === 'male') {
    const masculino = objetoAnimal.residents.filter((elemento) => elemento.sex === 'male');
    return masculino.length;
  }
  return objetoAnimal.residents.length;
}

module.exports = countAnimals;
