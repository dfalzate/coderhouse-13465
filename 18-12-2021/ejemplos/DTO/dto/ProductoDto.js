export default class ProductoDto {
    constructor(datos, cotizaciones) {
        this.nombre = datos.nombre;
        this.precio = datos.precio;
        this.stock = datos.stock;
        for (const [ denominacion, valor ] of Object.entries(cotizaciones)) {
            this[ denominacion ] = valor;
        }
    }
}
