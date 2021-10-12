/* -------------------------------------------------------------------------- */
/*                               Arrow function                               */
/* -------------------------------------------------------------------------- */

//Funcion normal

function fun1() {
  console.log('Función 1')
}

//types  interfaces

type functionWithoutVariable = () => void
type functionWithVariable = (param1: string, param2: number) => number

//Arrow functions
const fun2: functionWithoutVariable = () => console.log('Arrow function')

const fun3: functionWithVariable = (param1: string, param2: number) => {
  console.log('Un solo parámetro' + param1)
  return param2
}

/* ----------------------------- Código en vivo ----------------------------- */

type functionPromedio = (num1: number, num2: number, array: number[]) => number

const promedio: functionPromedio = (num1: number, num2: number, array: number[]) => {
  const resultado = (num1 + num2) / 2
  console.log(array)
  return resultado
}

console.log(promedio(1, 2, [1, 2, 3]))

const prom = (num1: number, num2: number, num3: number) => {
  return 'String'
}

const imprimirObjeto = () => { nombre: 'Diego Alzate' }
console.log(imprimirObjeto())


/* -------------------------------------------------------------------------- */
/*                                  Callbacks                                 */
/* -------------------------------------------------------------------------- */


// type functionCallback = () => void

// const function1 = (funct: functionPromedio) => {
//   funct()
// }
// const function2 = (num1: number, num2: number) => {
//   console.log('Soy un callback')
//   return
// }

// function1(function2)
// function1(() => { console.log('Soy otro callback') })

type _function1 = () => string
type _function2 = (param: string) => string

const ejecutar1 = (aFunction: _function1): string => aFunction()
const saludar1 = () => 'Saludos Diego Fernando'
console.log(ejecutar1(saludar1))

const ejecutar2 = (aFunction: _function2, params: string): string => aFunction(params)
const saludar2 = (nombre: string) => `Saludar a ${nombre}`
console.log(ejecutar2(saludar2, 'Diego'))

saludar2('DIego')

function callback(mensaje: string, functionCallback: _function2) {
  console.log(mensaje);
  return functionCallback('Este es un mensaje para la función callback')
}

console.log(callback('Mensaje', (param: string) => {
  return param
}))

/* ----------------------------- Ejemplo en vivo ---------------------------- */

const operacion = (num1: number, num2: number, operation: any) => operation(num1, num2)

const suma = (num1: number, num2: number) => num1 + num2

const resta = (num1: number, num2: number) => num1 - num2

console.log(operacion(1, 2, suma))
console.log(operacion(2, 1, resta))

/* -------------------------------------------------------------------------- */
/*                                  Promises                                  */
/* -------------------------------------------------------------------------- */

function dividir(dividendo: number, divisor: number) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject('No se puede dividir')
    } else {
      resolve(dividendo / divisor)
    }
  })
}


dividir(10, 2)
  .then((resultado) => console.log('Resultado promesa: =>', resultado))
  .catch((error) => console.log(error))

dividir(10, 0)
  .then((resultado) => console.log('Resultado promesa: =>', resultado))
  .catch((error) => console.log(error))



Promise.resolve(20)
  .then(x => x + 1)
  .then(x => x * 2)
  .then(x => {
    if (x === 22) throw 'Error'
    return 80
  })
  .then(x => 30)
  .then(x => x / 2)
  .then(console.log)
  .catch(console.log)

Promise.resolve(10)
  .then(x => x + 1)
  .then(x => x * 2)
  .then(x => {
    if (x === 22) throw 'Error'
    return 80
  })
  .then(x => 30)
  .then(x => x / 2)
  .then(console.log)
  .catch(console.log)

console.log('+++++++++++++++++')

/* --------------------------- Ejemplo sincronico --------------------------- */

function funA() {
  console.log(1)
  funB()
  console.log(2)
}

function funB() {
  console.log(3)
  funC()
  console.log(4)
}

function funC() {
  console.log(5)
}

funA()


/* --------------------------- Ejecucion callbacks -------------------------- */

const delay = (retardo: number) => { for (let i = 0; i < retardo * 3e6; i++); }

function hacerTarea1(num: number) {
  console.log('Delay - Haciendo tarea ', num)
  delay(100)
}

hacerTarea1(1);
hacerTarea1(2);
hacerTarea1(3);
hacerTarea1(4);

console.log('fin de tareas');
console.log('otras tareas ...')


function hacerTarea2(num: number, cb: any) {
  console.log('Tarea no. ', num)
  setTimeout(cb, 1000)
}

console.log('Inicio')
hacerTarea2(1, () => {
  hacerTarea2(2, () => {
    hacerTarea2(3, () => {
      console.log('fin de tareas');
    })
  })
})

console.log('otras tareas ...')

/* -------------------------------- solución -------------------------------- */

function mostrarLetras(palabra, termine) {
  let i = 0
  const timer = setInterval(() => {
    if (i < palabra.length) {
      console.log(palabra[i])
      i++
    } else {
      i = 0
      clearInterval(timer)
      termine()
    }
  }, 1000)
}


const fin = () => console.log('terminé')

setTimeout(() => { mostrarLetras('hola', fin); }, 0)
setTimeout(() => { mostrarLetras('hola', fin); }, 250)
setTimeout(() => { mostrarLetras('hola', fin); }, 500)