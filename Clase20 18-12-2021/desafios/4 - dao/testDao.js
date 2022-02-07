import PersonasDaoMem from './PersonasDaoMem.js'

const generadorDeIds = {
    id: 1,
    next() { return this.id++ }
}

const personasDao = new PersonasDaoMem()

console.log('-----------------------------')
console.log('1) Obtener todas las personas')
console.log(personasDao.getAll())

console.log('-----------------------------')
console.log('2) Incorporar una persona')
const persona1 = { nombre: 'Juan', apellido: 'Perez', DNI: '30555777', id: generadorDeIds.next() }
console.log(personasDao.save(persona1))

console.log('-----------------------------')
console.log('3) Obtener todas las personas')
console.log(personasDao.getAll())

console.log('-----------------------------')
console.log('4) Incorporar otra persona')
const persona2 = { nombre: 'Pedro', apellido: 'Suarez', DNI: '35678907', id: generadorDeIds.next() }
console.log(personasDao.save(persona2))

console.log('-----------------------------')
console.log('5) Obtener todas las personas')
console.log(personasDao.getAll())

console.log('--------------------------------')
console.log('6) Obtener una persona por su id')
console.log(personasDao.getById(persona2.id))

console.log('--------------------------------')
console.log('7) Actualizar una persona por su id')
console.log(personasDao.updateById(persona2.id, { nombre: 'Ana', apellido: 'Mei', DNI: '37123543' }))

console.log('-----------------------------')
console.log('8) Obtener todas las personas')
console.log(personasDao.getAll())

console.log('--------------------------------')
console.log('9) Borrar una persona por su id')
console.log(personasDao.deleteById(persona1.id))

console.log('-----------------------------')
console.log('10) Obtener todas las personas')
console.log(personasDao.getAll())
