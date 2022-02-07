export default class ProductoMostrable {
    #producto

    constructor(producto) {
        this.producto = producto
    }

    comoTextoPlano() {
        const lines = []
        lines.push(`id: ${this.producto.id}`);
        lines.push(`nombre: ${this.producto.nombre}`);
        lines.push(`precio: ${this.producto.precio}`);
        lines.push(`stock: ${this.producto.stock}`);
        return lines.join('\n')
    }
}