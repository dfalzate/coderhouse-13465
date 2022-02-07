const yargs = require('yargs')(process.argv.slice(2))

const args = yargs
  .default({
    nombre: "Nombre1",
    apellido:"Apellido1"
  })
  .alias({
    a:"aliasA"
  })
  .boolean('aliasA')
  .argv

console.log(args)
  
const { modo, puerto, debug, _ } = yargs
  .alias( {
      m: 'modo',
      p: 'puerto',
      d: 'debug'
  })
  .default( {
      modo: 'prod',
      puerto: 0,
      debug: false
  })
  .argv

  console.log({ modo, puerto, debug, otros: _ });