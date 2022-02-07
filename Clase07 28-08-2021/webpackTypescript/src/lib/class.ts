export class Persona {
  name: string;
  age: number
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  getName() {
    console.log(this.name)
  }
}