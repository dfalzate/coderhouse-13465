import ProductoDto from "../dtos/ProductoDto.js";
import ProductosDao from "./ProductosDao.js";

export default class ProductosDaoMemory extends ProductosDao {
  constructor() {
    super();
    this.productos = [];
  }

  static #matchesQuery = (obj, query) => {
    const conditions = Object.entries(query);
    for (const [key, value] of conditions) {
      if (!obj[key] || obj[key] != value) return false;
    }
    return true;
  };

  async getAll(query = {}) {
    const buscados = this.productos.filter((p) => ProductosDaoMemory.#matchesQuery(p, query));
    return buscados.map((p) => new ProductoDto(p));
  }

  async getById(idProd) {
    const buscado = this.productos.find((p) => p.id == idProd);
    return new ProductoDto(buscado);
  }

  async save(prod) {
    this.productos.push(prod);
  }

  async deleteById(idProd) {
    const index = this.productos.findIndex((p) => p.id == idProd);
    const [buscado] = this.productos.splice(index, 1);
    return new ProductoDto(buscado);
  }
}
