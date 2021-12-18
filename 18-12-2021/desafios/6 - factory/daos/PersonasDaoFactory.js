import PersonasDaoFile from "./PersonasDaoFile.js";
import PersonasDaoDb from "./PersonasDaoDb.js";
import PersonasDaoMem from "./PersonasDaoMem.js";

const rutaArchivoPersonas = "./personas.txt";
const cnxStr = "mongodb://localhost/test";

const opcion = process.argv[2] || "Mem";

let dao;
switch (opcion) {
  case "mongo":
    dao = new PersonasDaoDb(cnxStr);
    dao.init();
    break;
  case "file":
    dao = new PersonasDaoFile(rutaArchivoPersonas);
    dao.init();
    break;
  default:
    dao = new PersonasDaoMem();
}

export default class PersonasDaoFactory {
  static getDao() {
    return dao;
  }
}
