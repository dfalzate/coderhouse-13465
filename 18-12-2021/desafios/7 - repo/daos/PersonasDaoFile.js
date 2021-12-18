import fs from "fs";
import { asDto } from "../dtos/PersonaDTO.js";

export default class PersonasDaoFile {
  #ready = false;

  constructor(ruta) {
    this.ruta = ruta;
    this.personas = [];
  }

  async init() {
    try {
      await fs.promises.readFile(this.ruta, "utf-8");
      this.#ready = true;
      console.log("personas dao en archivo -> listo");
    } catch (error) {
      await fs.promises.writeFile(this.ruta, "[]");
      this.#ready = true;
      console.log("personas dao en archivo -> listo");
    }
  }

  disconnect() {
    console.log("personas dao en archivo -> cerrado");
  }

  #checkReady = () => {
    if (!this.#ready) throw new Error("INTERNAL_ERROR: dao no conectado!");
  };

  #leerArchivo = async () => {
    this.#checkReady();
    const texto = await fs.promises.readFile(this.ruta, "utf-8");
    this.personas = JSON.parse(texto);
  };

  #escribirArchivo = async () => {
    this.#checkReady();
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

  async updateById(idParaReemplazar, nuevosCampos) {
    await this.#leerArchivo();
    const index = this.#getIndex(idParaReemplazar);
    const actualizada = { ...this.personas[index], ...nuevosCampos };
    this.personas.splice(index, 1, actualizada);
    await this.#escribirArchivo();
    return asDto(actualizada);
  }
}
