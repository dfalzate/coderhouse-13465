import ProductoDto from '../dtos/ProductoDto.js';
import ProductosDao from './ProductosDao.js';

export default class ProductosDaoMongoDb extends ProductosDao {

  constructor(cliente) {
    super()
    this.productos = cliente.getCollection("coderhouse", "articulos");
  }

  async getAll(query = {}) {
    const buscados = await this.productos.find(query).toArray();
    return buscados.map(p => new ProductoDto(p))
  }

  async getById(idProd) {
    const buscado = await this.productos.findOne({ id: idProd });
    return new ProductoDto(buscado)
  }

  async save(prod) {
    await this.productos.insertOne(prod)
  }

  async deleteById(idProd) {
    const buscado = await this.productos.findOneAndDelete({ id: idProd });
    return new ProductoDto(buscado)
  }
}
