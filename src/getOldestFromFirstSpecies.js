const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function vericaAnimal(todosAnimais) {
  const animal = todosAnimais[0];
  let animalMaisVelho = animal;
  todosAnimais.forEach((elemento) => {
    if (elemento.age > animal.age && elemento.age > animalMaisVelho.age) {
      animalMaisVelho = elemento;
    }
  });
  return animalMaisVelho;
}

function getOldestFromFirstSpecies(id) {
  const pessoaColaboradora = employees.find((elemento) => elemento.id === id);
  const primeiroAnimal = pessoaColaboradora.responsibleFor[0];
  const especie = species.find((elemento) => elemento.id === primeiroAnimal);
  const todosAnimais = especie.residents;
  const animalMaisVelho = vericaAnimal(todosAnimais);
  const velhos = todosAnimais.filter((elemento) => elemento.age === animalMaisVelho.age);
  const obj = velhos[0];
  return [obj.name, obj.sex, obj.age];
}

module.exports = getOldestFromFirstSpecies;
