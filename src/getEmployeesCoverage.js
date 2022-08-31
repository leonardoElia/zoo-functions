const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function retornoNome(nome) {
  const cod = nome.responsibleFor;
  const animal = [];
  cod.forEach((elemento) => {
    const achado = species.find((ani) => ani.id === elemento);
    animal.push(achado);
  });
  const local = animal.map((localAni) => localAni.location);
  const animalNome = animal.map((nomeAni) => nomeAni.name);
  return {
    id: nome.id,
    fullName: `${nome.firstName} ${nome.lastName}`,
    species: animalNome,
    locations: local,
  };
}

function retornoID(ids) {
  const cod = ids.responsibleFor;
  const animal = [];
  cod.forEach((elemento) => {
    const achado = species.find((ani) => ani.id === elemento);
    animal.push(achado);
  });
  const local = animal.map((localAni) => localAni.location);
  const animalNome = animal.map((nomeAni) => nomeAni.name);
  return {
    id: ids.id,
    fullName: `${ids.firstName} ${ids.lastName}`,
    species: animalNome,
    locations: local,
  };
}

function verificaId(id) {
  return employees.some((elemento) => elemento.id === id);
}

function seNomeSeId(pessoa) {
  if (Object.keys(pessoa).includes('name')) {
    const func = pessoa.name;
    return func;
  }
  const existente = verificaId(pessoa.id);
  if (existente === false) {
    throw Error('Informações inválidas');
  }
  const func = pessoa.id;
  return func;
}

function casoNada() {
  return employees.map((funcionario) => {
    const cod = funcionario.responsibleFor;
    const animal = [];
    cod.forEach((elemento) => {
      const achado = species.find((ani) => ani.id === elemento);
      animal.push(achado);
    });
    const local = animal.map((localAni) => localAni.location);
    const animalNome = animal.map((nomeAni) => nomeAni.name);
    return {
      id: funcionario.id,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animalNome,
      locations: local,
    };
  });
}

function getEmployeesCoverage(pessoa) {
  if (typeof pessoa === 'undefined') {
    return casoNada();
  }
  const func = seNomeSeId(pessoa);
  const id = employees.find((elemento) => elemento.id === func);
  const nome = employees.find((nomes) =>
    nomes.firstName === func || nomes.lastName === func);
  if (typeof id === 'undefined') {
    return retornoNome(nome);
  }
  return retornoID(id);
}

module.exports = getEmployeesCoverage;
