const data = require('../data/zoo_data');

const {species} = data;

function getSpeciesByIds(...ids) {
  
  return ids.reduce((agrupador, elemento) => {
    species.forEach((animal) => {
      if(elemento === animal.id){
         agrupador.push(animal);
      }
    });
    return agrupador;
  },[]);
}
//onsole.log(species);
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
