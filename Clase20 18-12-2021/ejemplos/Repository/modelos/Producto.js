export default class Producto {
  #id;
  #nombre;
  #precio;
  #stock;

  constructor({ id, nombre, precio, stock }) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  get id() { return this.#id }

  set id(id) {
    if (!id) throw new Error('"id" es un campo requerido');
    this.#id = id;
  }

  get nombre() { return this.#nombre }

  set nombre(nombre) {
    if (!nombre) throw new Error('"nombre" es un campo requerido');
    this.#nombre = nombre;
  }

  get precio() { return this.#precio }

  set precio(precio) {
    if (!precio) throw new Error('"precio" es un campo requerido');
    if (isNaN(precio)) throw new Error('"precio" debe ser numérico');
    if (precio < 0) throw new Error('"precio" debe ser positivo');
    this.#precio = precio;
  }

  get stock() { return this.#stock }

  set stock(stock) {
    if (!stock) throw new Error('"stock" es un campo requerido');
    if (isNaN(stock)) throw new Error('"stock" debe ser numérico');
    if (stock < 0) throw new Error('"stock" debe ser positivo');
    this.#stock = stock;
  }
}
