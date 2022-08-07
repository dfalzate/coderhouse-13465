import { MongoClient } from "./deps.ts";
import { User } from "./types/types.ts";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient();

try {
  await client.connect(URI);
  console.log("Conectado a la base de datos");
} catch (error) {
  console.log(error);
}

const db = client.database("deno");
export const collection = db.collection<User>("users");
