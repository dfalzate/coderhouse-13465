const ApiNoticias = require('../api/noticias.api.js')

class ControladorNoticias{
  constructor() {
    this.apiNoticias = new ApiNoticias()
  }

  obtenerTodas =async  (req,res) => {
    try {
      const response = await this.apiNoticias.obtenerTodas()
      return res.status(200).json(response)
    } catch (error) {
      return console.log(error)
    }
  }

  obtenerNoticias = async (req, res) => {
    try {
      const { id } = req.params
      const noticias = await this.apiNoticias.obtenerNoticias(id)
      return res.status(200).json(noticias)
    } catch (error) {
      return console.log(error)
    }
  }

  guardarNoticia = async (req, res) => {
    try {
      const { body } = req
      const response = await this.apiNoticias.guardarNoticias(body)
      return res.status(200).json(response)
    } catch (error) {
      return console.log(error)
    }
  }


}

module.exports = ControladorNoticias