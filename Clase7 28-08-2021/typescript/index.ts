const arr: number[] = [1, 2, 3, 4, 5]

arr.map((x) => x * x).forEach((x) => console.log(x))

const persona: {
  nombre: string,
  edad: number
} = {
  nombre: 'Diego Alzate',
  edad: 30
}
console.log(persona)

class Persona {
  nombre: string
  edad: number

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

console.log(persona)