const data = require('../data/zoo_data');

const {species} = data;

function getAnimalsOlderThan(animal, age) {
  const animalFiltrado = species.filter((elemento) => {
    return elemento.name === animal;
  });
  
  const todosAnimaisDaEspecie = animalFiltrado[0].residents;

  return todosAnimaisDaEspecie.every((elemento) => elemento.age >= age);
  
}

console.log(getAnimalsOlderThan('lions', 1));

module.exports = getAnimalsOlderThan;
