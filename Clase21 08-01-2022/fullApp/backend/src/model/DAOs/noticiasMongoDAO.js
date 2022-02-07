const noticiasDTO = require('../DTOs/noticiasDTO.js')
const noticiasBaseDAO = require('./noticiasBaseDAO')

class NoticiasMemDAO extends noticiasBaseDAO{
  constructor() {
    super()
    this.noticias=[]
  }

  obtenerTodas
  obtenerNoticia
  guardarNoticia
  actualizarNoticia
  borrarNoticia

}

module.exports = NoticiasMemDAO