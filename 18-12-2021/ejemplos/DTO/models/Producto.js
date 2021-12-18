import mongoose from 'mongoose'
import Config from '../config.js'

const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true }
});
  
const ProductoModel = mongoose.model(Config.db.collection,ProductoSchema)

export default ProductoModel