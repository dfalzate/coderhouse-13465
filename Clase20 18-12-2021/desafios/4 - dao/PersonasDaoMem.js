export default class PersonasDaoMem {
  constructor() {
    this.personas = [];
  }

  #getIndex = (id) => {
    return this.personas.findIndex((persona) => persona.id === id);
  };

  getAll() {
    return this.personas;
  }

  getById(idBuscado) {
    return this.personas[this.#getIndex(idBuscado)];
  }

  save(personaNueva) {
    this.personas.push(personaNueva);
    return personaNueva;
  }

  deleteById(idParaBorrar) {
    const [borrada] = this.personas.splice(this.#getIndex(idParaBorrar), 1);
    return borrada;
  }

  deleteAll() {
    this.personas = [];
  }

  updateById(idParaReemplazar, nuevaPersona) {
    const index = this.#getIndex(idParaReemplazar);
    const actualizada = { ...this.personas[index], ...nuevaPersona };
    this.personas.splice(index, 1, actualizada);
    return actualizada;
  }
}
