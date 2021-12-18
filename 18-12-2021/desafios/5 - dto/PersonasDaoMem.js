import { asDto } from "./PersonaDTO.js";

export default class PersonasDaoMem {
  constructor() {
    this.personas = [];
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

  updateById(idParaReemplazar, nuevaPersona) {
    const index = this.#getIndex(idParaReemplazar);
    const actualizada = { ...this.personas[index], ...nuevaPersona };
    this.personas.splice(index, 1, actualizada);
    return asDto(actualizada);
  }
}
