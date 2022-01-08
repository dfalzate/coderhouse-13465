class NoticiasBaseDAO{

  getNextId(noticias) {
    let max=0
    noticias.map(noticia => {
      if (noticia._id > max) {
        max=noticia._id
      }
    })
    return max+1
  }

  getIndex(_id, noticias) {
    let index =-1
    noticias.map((noticia, _index) => {
      if(noticia._id.toString() === _id.toString()) index= _index
    })

    return index
  }

  obtenerTodas() {
    console.log('No implementado')
    
  }

  obtenerNoticia() {
    console.log('No implementado')
  }
  guardarNoticia() {
    console.log('No implementado')
  }
  actualizarNoticia() {
    console.log('No implementado')
  }
  borrarNoticia() {
    console.log('No implementado')
  }
}

module.exports = NoticiasBaseDAO