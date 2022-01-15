const faker = require('faker');

function getNoticia(){
  return {
    titulo: faker.hacker.phrase(),
    cuerpo:faker.lorem.paragraph(),
    autor: faker.name.findName(),
    imagen: faker.image.avatar(),
    vista:false
  }
}

module.exports = {getNoticia}