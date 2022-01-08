
const NoticiasFactoryDAO = require('../model/DAOs/noticiasFactory.js')

class ApiNoticias{
  constructor() {
    console.log(process.env.TIPO_PERSISTENCIA)
    this.noticiasDAO = NoticiasFactoryDAO.get(process.env.TIPO_PERSISTENCIA)
  }

  async obtenerTodas() {
    return this.noticiasDAO.obtenerTodas()
  }

  async obtenerNoticias(id) {
    return this.noticiasDAO.obtenerNoticia(id)
  }

  async guardarNoticias(noticia) {
    return this.noticiasDAO.guardarNoticia(noticia)
  }

}

module.exports=ApiNoticias