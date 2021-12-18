export default class ProductoDto {
  id;
  nombre;
  precio;
  stock;

  constructor({ id, nombre, precio, stock }) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  static fromJson(json) {
    const datos = JSON.parse(json)
    return new ProductoDto(datos)
  }

  toJson() {
    return JSON.stringify(this)
  }
}
