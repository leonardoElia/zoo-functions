const data = require('../data/zoo_data');

const { employees } = data;

const gerentes = employees.filter((funcionario) =>
  funcionario.managers.length === 0 || funcionario.managers.length === 1);

function isManager(id) {
  return gerentes.some((gerente) => gerente.id === id);
}

function getRelatedEmployees(managerId) {
  const verdadeiroOuFalso = isManager(managerId);
  if (verdadeiroOuFalso === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const gerente = gerentes.find((pessoas) => pessoas.id === managerId);
  if (gerente.firstName === 'Burl') {
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  } if (gerente.firstName === 'Ola') {
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  } if (gerente.firstName === 'Stephanie') {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  return ['Ardith Azevado'];
}

module.exports = { isManager, getRelatedEmployees };
