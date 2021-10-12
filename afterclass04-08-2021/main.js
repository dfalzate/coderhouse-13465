//Que es frontend

// Tiposde de datos
//   Primitivos: number, string, booleanos
//   Objeto: array, funciones, objetos, clases

// Diferencia entre var, let, const,
//   ecmascript
//   scope

const array = []
const obj = {}
obj.nombre = 'Nombre'
// obj = {
// 	nombre: 'Nombre',
// }
// array = [1, 2, 3,]
array.push(1, 2, 3)
console.log(array)

//funncion clasica
function nam() {}
nam()

//IIFE de una funciona anonima
;(function (a, b) {
	console.log(a, b)
})(1, 2)

//Funcion flecha de
const flecha = (param, param2) => console.log(param, param2)

flecha('hola', 'diego')

// el tipeo, mas resumido..

class Clase {
	constructor(data) {
		this.data = data
	}
	metodo = (param) => console.log(param)
}

let clase = new Clase('hola')

clase.metodo('hola')

const fs = require('fs')

//clousure

function funca() {
	const nombre = 'Nombre'
	function funcb() {
		const apellido = 'Apellido'
	}
}

//Asincronismo

// promise
// async await

// Promise.all espera a que todas las peticiones se cumplan

const fs = require('fs')
// import fs from 'fs'

fs.readFileSync
fs.readFile
await fs.promises.readFile
