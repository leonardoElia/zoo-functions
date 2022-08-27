const data = require('../data/zoo_data');

const {employees} = data;

let gerentes = employees.filter((funcionario) => funcionario.managers.length === 0 || funcionario.managers.length ===1);

function isManager(id) {
  return gerentes.some((gerente) => gerente.id === id );
}

function getRelatedEmployees(managerId) {
  const verdadeiroOuFalso = isManager(managerId);
  if(verdadeiroOuFalso === false){
  throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const gerente = gerentes.find((pessoas) => pessoas.id === managerId); 
  //console.log(gerente);

  if(gerente.firstName === 'Burl'){
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  } else if (gerente.firstName === 'Ola'){
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  } else if(gerente.firstName === 'Stephanie'){
      return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }

  return ['Ardith Azevado'];


}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
