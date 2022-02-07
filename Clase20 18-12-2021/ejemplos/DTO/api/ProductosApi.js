import ProductosDaoDB from '../dao/ProductosDaoDb.js';
import ProductoDto from '../dto/ProductoDto.js';

class Cotizador {
    static VALOR_DOLAR = 100

    getPrecioSegunMoneda(precio, moneda) {
        switch (moneda) {
            case 'USD':
                return precio * Cotizador.VALOR_DOLAR
            default:
                return precio
        }
    }
}

export default class ProductosApi {

    constructor() {
        this.productosDao = new ProductosDaoDB();
        this.cotizador = new Cotizador()
    }

    async agregar(prodParaAgregar) {
        const prodAgregado = await this.productosDao.add(prodParaAgregar);
        return prodAgregado;
    }

    async buscar(id) {
        let productos;
        if (id) {
            productos = await this.productosDao.getById(id);
        } else {
            productos = await this.productosDao.getAll();
        }
        return productos;
    }

    async borrar(id) {
        if (id) {
            await this.productosDao.deleteById(id);
        }
        else {
            await this.productosDao.deleteAll();
        }
    }

    async reemplazar(id, prodParaReemplazar) {
        const prodReemplazado = await this.productosDao.updateById(id, prodParaReemplazar);
        return prodReemplazado;
    }

    async buscarConCotizacionEnDolares(id) {
        if (id) {
            const producto = await this.productosDao.getById(id);
            const cotizaciones = { precioDolar: this.cotizador.getPrecioSegunMoneda(producto.precio, 'USD') }
            const productoDto = new ProductoDto(producto, cotizaciones)
            return productoDto
        } else {
            const productos = await this.productosDao.getAll();
            const productosDtos = productos.map(producto => {
                const cotizaciones = { precioDolar: this.cotizador.getPrecioSegunMoneda(producto.precio, 'USD') }
                const productoDto = new ProductoDto(producto, cotizaciones)
                return productoDto
            })
            return productosDtos;
        }
    }

    exit() {
        this.productosDao.exit();
    }
}
