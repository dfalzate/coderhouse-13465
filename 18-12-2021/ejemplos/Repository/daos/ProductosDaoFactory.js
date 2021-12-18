import DbClient from "./mongo/DbClient.js";
import ProductosDaoMongoDb from "./ProductosDaoMongoDb.js";
import ProductosDaoMemory from "./ProductosDaoMemory.js";
import { PERSISTENCIA, MONGO_URL } from "../config.js";

let dao;

switch (PERSISTENCIA) {
  case "MONGO":
    const dbClient = new DbClient(MONGO_URL);
    dbClient.connect();
    dao = new ProductosDaoMongoDb(dbClient);
    break;
  default:
    dao = new ProductosDaoMemory();
}

export function getDao() {
  return dao;
}
