const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;
const semana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const semana2 = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const se = [Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
const dias = {};
const segunda = ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'];
const terca = ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'];
const quarta = ['lions', 'otters', 'frogs', 'snakes', 'giraffes'];
const quinta = ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
const sexta = [
  'lions', 'tigers',
  'bears', 'penguins',
  'otters', 'frogs',
  'snakes', 'elephants'];
const sabado = ['lions', 'bears', 'penguins', 'snakes', 'elephants'];

function retornaSabado() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function retornaTudo() {
  semana.forEach((elemento, index) => {
    dias[elemento] = { officeHour: `Open from ${se[index].open}am until ${se[index].close}pm` };
  });
  dias.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  dias.Tuesday.exhibition = segunda;
  dias.Wednesday.exhibition = terca;
  dias.Thursday.exhibition = quarta;
  dias.Friday.exhibition = quinta;
  dias.Saturday.exhibition = sexta;
  dias.Sunday.exhibition = sabado;
  return dias;
}

function retornaDia(dia) {
  if (dia === 'Wednesday') {
    return {
      Wednesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
      },
    };
  } if (dia === 'Tuesday') {
    return {
      Tuesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
      },
    };
  } if (dia === 'Monday') {
    return retornaSabado();
  }
}

function getSchedule(scheduleTarget) {
  let day;
  semana2.forEach((diaSemana) => {
    if (scheduleTarget === diaSemana) {
      day = retornaDia(scheduleTarget);
    }
  });

  if (typeof day !== 'undefined') {
    return day;
  }
  const animal = species.find((elemento) => elemento.name === scheduleTarget);
  if (typeof scheduleTarget === 'undefined' || typeof animal === 'undefined') {
    return retornaTudo();
  }
  return animal.availability;
}

module.exports = getSchedule;
