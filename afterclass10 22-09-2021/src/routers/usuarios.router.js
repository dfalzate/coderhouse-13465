import express from 'express'
import * as UsuariosController from '../controllers/usuarios.controllers.js'
const router = express.Router()

router.post('/',UsuariosController.createUser)

export default router