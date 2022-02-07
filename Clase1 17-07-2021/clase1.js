
/* -------------------------------- Variables ------------------------------- */

interface nombre{
  nombre: string,
  apellido: string
}

let var2: string = 'Clase2'
const var3: string = 'Clase3'
const var4: nombre {
  nombre: string,
  appelido: string
} = {
  nombre: 'Diego',
    apellido: 'Alzate'
}
const var5:any[] = [1, 2, 3, 4]
let var5: number = 5
let var6: any = [] | 'string'

let nombres: nombre[] = [
  {
    nombre: 'Diego',
      apellido: 'Alzate'
  },
  {
    nombre: 'Diego',
      apellido: 'Alzate'
  }
]

interface factura{
  nombre:nombre
}

// var var1 = 'Clase1'

const arr:nombre[] = [];
// arr = [1, 2, 3];
arr.push(1) // mutando
console.log(arr);

const obj = {}
// obj.nombre = 'Clase1'
obj=[]
console.log(obj)

/* ---------------------------- Datos y variables --------------------------- */

interface peliculas{
  {
    nombre: string,
    year: number,
    protagonistas: string[]
  }
}

interface persona {
  nombre: string,
  edad: number,
  precio: number,
  series: string[],
  peliculas: peliculas
}

/* -------------------------------- Funciones ------------------------------- */
/* ----------------------------- Funciones IIFE y anónimas----------------------------- */
/* ---------------------------- Template strings ---------------------------- */

(function suma(num1,num2) {
  console.log(num1+num2)
})(1,2)

// suma(1,2)
(function (num1,num2) {
  console.log(num1+num2)
})(1, 2)

function resta(num1, num2) {
  return function(){num1+num2}
}
function call(()=>{})

const apellido = 'Alzate'

function crearNombre(nombre) {
  function ape(apellido) {
    console.log(`${nombre} ${apellido} es un gran profesor...`)
  }
  ape(apellido)
}

crearNombre('Diego')

// '' ``


/* -------------------------------- Ejercicio ------------------------------- */

function mostrarLista(lista) {
    if (lista.length > 0) {
      return console.log(lista)
    }
    console.log('lista vacía');
}
  
  
(function(lista) {
    if (lista.length > 0) {
      return console.log(lista)
    }
    console.log('lista vacía');
  })([1, 2, 3])
  
  function crearMultiplicador(num1,num3) {
    return (function (num2) {
      return num1*num2
    })(num3)

    let var = function (num) {    
      return num1*num2
    } ``
  }
  console.log(crearMultiplicador(3))
  
  function duplicar(num1) {
    return crearMultiplicador(num1)*2
  }
  
console.log(duplicar(2))


/* --------------------------------- Classes -------------------------------- */

class Persona{
  constructor(nombre, apellido, edad, altura, sexo) {
    this.nombrePersona = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    this.sexo = sexo
  }
 
  static contadorGlobal = 0
  
  mostrarEdad() {
    console.log(this.edad)
  }

  mostrarEdad(){ console.log( this.edad)}

  contador() {
    contadorGlobal++
  }
}

let estudiante = new Persona('Jorge', 'Salazar', 43, 180, 'masculino')
console.log(estudiante.nombre);
estudiante.mostrarEdad()

/* ---------------------------- Ejercicio clases ---------------------------- */

class Contador {

  static cuentaGlobal = 0

  constructor(responsable) {
    this.responsable = responsable
    this.cuentaIndividual = 0
  }

  obtenerResponsable() {
    return this.responsable
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual
  }

  obtenerCuentaGlobal() {
    return Contador.cuentaGlobal
  }

  contar() {
    this.cuentaIndividual++
    Contador.cuentaGlobal++
  }
}

const r1 = new Contador('res1')
const r2 = new Contador('res2')

r1.contar()
r1.contar()

r2.contar()
r2.contar()
r2.contar()

console.log(`r1 ind: ${r1.obtenerCuentaIndividual()}`)
console.log(`r1 glob: ${r1.obtenerCuentaGlobal()}`)