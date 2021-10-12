const faker = require('faker')
const fs = require('fs')

let str = 'NOMBRE;APELLIDO;EMAIl;TRABAJO;LUGAR\r\n'

for (let i = 0; i < 100; i++) {
  str += faker.name.firstName() + ';' +
    faker.name.lastName() + ';' +
    faker.internet.email() + ';' +
    faker.name.jobTitle() + ';' +
    faker.address.city() +'\r\n'
}

fs.writeFileSync('./usuarios.csv',str)