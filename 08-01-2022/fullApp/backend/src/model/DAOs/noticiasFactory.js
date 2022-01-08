const NoticiasMemDAO = require('./noticiasMEMDAO.js')
// const NoticiasFileDAO = require('./noticiasFileDAO.js')
// const NoticiasMongoDAO = require('./noticiasMongoDAO.js')


class NoticiasFactoryDAO{
  static get(tipo) {
    switch (tipo){
      case "MEM":
        return new NoticiasMemDAO()
      case "FILE":
        return new NoticiasMemDAO()
      case "MONGO":
       return new NoticiasMemDAO() 
      default:
        return new NoticiasMemDAO()
     }
   }
}

module.exports= NoticiasFactoryDAO