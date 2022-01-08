const noticiasDTO = require('../DTOs/noticiasDTO.js')
const noticiasBaseDAO = require('./noticiasBaseDAO')

class NoticiasMemDAO extends noticiasBaseDAO{
  constructor() {
    super()
    this.noticias = [
      {
        titulo: "titulo1",
        cuerpo: "cuerpo1",
        autor: "autor1",
        imagen: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
        vista: false,
        _id: 1,
        fyh: "1/8/2022, 10:20:53 AM"
      },
     {
        titulo: "titulo2",
        cuerpo: "cuerpo2",
        autor: "autor2",
        imagen: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
        vista: false,
        _id: 2,
        fyh: "1/8/2022, 10:20:53 AM"
      }
    ]
  }

  obtenerTodas = () => {
    return this.noticias
  }

  obtenerNoticia = (_id) => {
    try {
      const indice = this.getIndex(_id, this.noticias)
      return indice >=0 ? [this.noticias[indice]]:[]
    } catch (error) {
      console.log(error)
      return []
    }
  }

  guardarNoticia = (noticia) => {
    try {
      const noticiaDTO = noticiasDTO(noticia, this.getNextId(this.noticias), new Date().toLocaleString())
      this.noticias.push(noticiaDTO)
      return noticiaDTO
    } catch (error) {
      console.log(error)
      return {}
    }
  }
  
  actualizarNoticia = (_id, noticia) => {
    try {
      const noticiaDTO = noticiasDTO(noticia, this.getNextId(this.noticias), new Date().toLocaleString())
      const indice = this.getIndex(_id, this.noticias)
      if (indice >= 0) {
        const noticiaActualizada = {
          ...this.noticias[indice],
          ...noticiaDTO
        }
        this.noticias[indice] = noticiaActualizada
        return noticiaActualizada
      } 
    } catch (error) {
      console.log(error)
      return {}
    }
    
  }

  borrarNoticia = (_id) => {
    try {
      return this.noticias.splice(this.getIndex(_id,this.noticias),1)[0]
    } catch (error) {
      console.log(error)
      return {}
    }
  }

}

module.exports = NoticiasMemDAO