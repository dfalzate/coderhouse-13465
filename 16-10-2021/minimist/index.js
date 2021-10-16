const minimist = require('minimist')

const options = {
  default: {
    nombre: "NombreDefecto",
    apellido:"ApellidoDefecto"
  },
  alias: {
    a: 'aliasA',
    b: 'aliasB'
  }
}

const arg = minimist(process.argv.slice(2), options)

console.log(arg)


const optionsDesafio = {
  alias: {
    m:'modo',
    p:'puerto',
    d:'debug'
  },
  default: {
    modo: 'prod',
    puerto:3000,
    debug:false
  }
}

const {modo, puerto, debug, _} = minimist(process.argv.slice(2),optionsDesafio)
console.log({modo, puerto, debug, otros:_})