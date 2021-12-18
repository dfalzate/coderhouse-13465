import ProductosDao from './ProductosDao.js'
import productos from '../models/Producto.js'
import CustomError from '../errores/CustomError.js'
import MyMongoClient from '../db/DbClientMongo.js'
import Config from '../config.js'

class ProductosDaoDb extends ProductosDao {

    constructor() {
        super()
        this.client = new MyMongoClient()
        this.client.connect()
        this.projection = Config.db.projection
    }

    async getAll() {
        try {
            const buscados = await productos.find({}, this.projection).lean()
            return buscados
        } catch (err) {
            throw new CustomError(500, 'error al obtener todos los productos', err)
        }
    }

    async getById(idBuscado) {
        let buscado
        try {
            buscado = await productos.findOne({ _id: idBuscado }, this.projection)
        } catch (err) {
            throw new CustomError(500, 'error al buscar producto por dni', err)
        }

        if (!buscado) {
            throw new CustomError(404, 'producto no encontrado con ese ID', { id: idBuscado })
        }

        return [ buscado ]
    }

    async add(prodNuevo) {
        try {
            return await productos.create(prodNuevo)
        } catch (error) {
            throw new CustomError(500, 'error al crear un nuevo producto', error)
        }
    }

    async deleteById(idParaBorrar) {
        let result
        try {
            result = await productos.deleteOne({ _id: idParaBorrar })
        } catch (error) {
            throw new CustomError(500, `error al borrar producto`, error)
        }

        if (result.deletedCount == 0) {
            throw new CustomError(404, `no existe un producto para borrar con id: ${idParaBorrar}`, { idParaBorrar })
        }
    }

    async deleteAll() {
        try {
            await productos.deleteMany()
        } catch (error) {
            throw new CustomError(500, `error al borrar a todos los productos`, error)
        }
    }

    async updateById(idParaReemplazar, nuevoProd) {
        let result
        try {
            result = await productos.findOneAndReplace({ _id: idParaReemplazar }, nuevoProd, this.projection)
        } catch (error) {
            throw new CustomError(500, `error al reemplazar al producto`, error)
        }

        if (!result) {
            throw new CustomError(404, `no se encontró para actualizar un producto con id: ${idParaReemplazar}`, { idParaReemplazar })
        }

        return nuevoProd
    }
    exit() {
        this.client.disconnect()
    }
}

export default ProductosDaoDb