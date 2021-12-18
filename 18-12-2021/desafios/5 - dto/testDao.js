import PersonasDao from "./PersonasDaoMem.js";
//import PersonasDao from "./PersonasDaoFile.js";

async function start() {
  const generadorDeIds = {
    id: 1,
    next() {
      return this.id++;
    },
  };

  const personasDao = new PersonasDao("./personas.txt");

  console.log("-----------------------------");
  console.log("1) Obtener todas las personas");
  console.log(await personasDao.getAll());

  console.log("-----------------------------");
  console.log("2) Incorporar una persona");
  const persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    dni: "30555777",
    id: generadorDeIds.next(),
  };
  console.log(await personasDao.save(persona1));

  console.log("-----------------------------");
  console.log("3) Obtener todas las personas");
  console.log(await personasDao.getAll());

  console.log("-----------------------------");
  console.log("4) Incorporar otra persona");
  const persona2 = {
    nombre: "Pedro",
    apellido: "Suarez",
    dni: "35678907",
    id: generadorDeIds.next(),
  };
  console.log(await personasDao.save(persona2));

  console.log("-----------------------------");
  console.log("5) Obtener todas las personas");
  console.log(await personasDao.getAll());

  console.log("--------------------------------");
  console.log("6) Obtener una persona por su id");
  console.log(await personasDao.getById(persona2.id));

  console.log("--------------------------------");
  console.log("7) Actualizar una persona por su id");
  console.log(
    await personasDao.updateById(persona2.id, { nombre: "Ana", apellido: "Mei", dni: "37123543" }),
  );

  console.log("-----------------------------");
  console.log("8) Obtener todas las personas");
  console.log(await personasDao.getAll());

  console.log("--------------------------------");
  console.log("9) Borrar una persona por su id");
  console.log(await personasDao.deleteById(persona1.id));

  console.log("-----------------------------");
  console.log("10) Obtener todas las personas");
  console.log(await personasDao.getAll());

  console.log("-----------------------------");
  console.log("Borrar todas las personas (limpieza final)");
  await personasDao.deleteAll();
}

start();
