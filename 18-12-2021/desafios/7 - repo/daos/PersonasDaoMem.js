import { asDto } from "../dtos/PersonaDTO.js";

export default class PersonasDaoMem {
  constructor() {
    this.personas = [];
  }

  init() {
    console.log("personas dao en memoria -> listo");
  }

  disconnect() {
    console.log("personas dao en memoria -> cerrado");
  }

  #getIndex = (id) => {
    return this.personas.findIndex((persona) => persona.id === id);
  };

  getAll() {
    return asDto(this.personas);
  }

  getById(idBuscado) {
    return asDto(this.personas[this.#getIndex(idBuscado)]);
  }

  save(personaNueva) {
    this.personas.push(personaNueva);
    return asDto(personaNueva);
  }

  deleteById(idParaBorrar) {
    const [borrada] = this.personas.splice(this.#getIndex(idParaBorrar), 1);
    return asDto(borrada);
  }

  deleteAll() {
    this.personas = [];
  }

  updateById(idParaReemplazar, nuevosCampos) {
    const index = this.#getIndex(idParaReemplazar);
    const actualizada = { ...this.personas[index], ...nuevosCampos };
    this.personas.splice(index, 1, actualizada);
    return asDto(actualizada);
  }
}
