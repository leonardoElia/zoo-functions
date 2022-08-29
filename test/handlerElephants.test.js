// const { TestScheduler } = require('jest');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testando retorno de quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('testando se retorna um array com o nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('testando se retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Testando se retorna a localização dos elefantes no zoologico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Testando se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('testando se retorna um array com os dias onde é possivel visitar elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('testando se a função retorna undefined quando não é passado nenhum parametro', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('testando se a função retorna null quando é passado um parametro que não existe', () => {
    expect(handlerElephants('xablau')).toEqual(null);
  });

  it('testando se quando passa um numero comoo parametro retorna aviso', () => {
    expect(handlerElephants(6)).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
