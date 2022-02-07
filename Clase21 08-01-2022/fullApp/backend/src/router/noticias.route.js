const express = require('express')
const ControladorNoticias = require('../controlador/noticias.controller.js')

const router = express.Router()

class RouterNoticias{
  constructor() {
    this.controladorNoticias = new ControladorNoticias()
  }
  start() {
    router.get('/',this.controladorNoticias.obtenerTodas)
    router.get('/:id',this.controladorNoticias.obtenerNoticias)
    router.post('/',this.controladorNoticias.guardarNoticia)
    // router.put('/',)
    // router.delete('/',)
    return router
  }

}

module.exports = RouterNoticias