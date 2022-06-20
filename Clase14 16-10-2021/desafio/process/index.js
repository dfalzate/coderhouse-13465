const minimist = require('minimist')

process.on('exit', (code) => {
  console.log('Codigo=>',code)
})

const args = minimist(process.argv.slice(2))

function crearError() {
  const tipos =[]
  for (const value of args._) {
    tipos.push(typeof value)
  }
  console.log({
    error: {
      description: 'Error de tipo',
      numeros: args._,
      tipos:tipos
    }
  })
  process.exit(-5)
}


//1
function promedio(args) {
  if (args._.length ===0 ) {
    console.log({
      error: {
        descripcion:'Objeto vacio'
      }
    })
    process.exit(-4)
  }
  for (const value of args._) {
    if (typeof value !== 'number') crearError()
  }
  const suma = args._.reduce((sig, act) => sig + act)
  const promedio = suma / args._.length
  return promedio
}

console.log ({
  datos: {
    numeros: args._,
    promedio: promedio(args),
    max: Math.max(...args._),
    min:Math.min(...args._),
    ejecutable: process.title,
    pid: process.pid
  }
})