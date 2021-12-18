import fs from "fs";
import { asDto } from "./PersonaDTO.js";

export default class PersonasDaoFile {
  constructor(ruta) {
    this.ruta = ruta;
    this.personas = [];
  }

  #leerArchivo = async () => {
    const texto = await fs.promises.readFile(this.ruta, "utf-8");
    this.personas = JSON.parse(texto);
  };

  #escribirArchivo = async () => {
    const texto = JSON.stringify(this.personas, null, 2);
    await fs.promises.writeFile(this.ruta, texto);
  };

  #getIndex = (id) => {
    return this.personas.findIndex((persona) => persona.id === id);
  };

  async getAll() {
    await this.#leerArchivo();
    return asDto(this.personas);
  }

  async getById(idBuscado) {
    await this.#leerArchivo();
    return asDto(this.personas[this.#getIndex(idBuscado)]);
  }

  async save(personaNueva) {
    await this.#leerArchivo();
    this.personas.push(personaNueva);
    await this.#escribirArchivo();
    return asDto(personaNueva);
  }

  async deleteById(idParaBorrar) {
    await this.#leerArchivo();
    const [borrada] = this.personas.splice(this.#getIndex(idParaBorrar), 1);
    await this.#escribirArchivo();
    return asDto(borrada);
  }

  async deleteAll() {
    this.personas = [];
    await this.#escribirArchivo();
  }

  async updateById(idParaReemplazar, nuevaPersona) {
    await this.#leerArchivo();
    const index = this.#getIndex(idParaReemplazar);
    const actualizada = { ...this.personas[index], ...nuevaPersona };
    this.personas.splice(index, 1, actualizada);
    await this.#escribirArchivo();
    return asDto(actualizada);
  }
}
