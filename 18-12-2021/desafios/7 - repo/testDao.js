import PersonasRepo from "./repos/PersonasRepo.js";
import Persona from "./modelos/Persona.js";
import PersonaMostrable from "./adaptadores/PersonaMostrable.js";

const generadorDeIds = {
  id: 1,
  next() {
    return this.id++;
  },
};

const personasRepo = new PersonasRepo();

async function start() {
  console.log("-----------------------------");
  console.log("1) Obtener todas las personas");
  mostrar(await personasRepo.getAll());

  console.log("-----------------------------");
  console.log("2) Incorporar una persona");
  const persona1 = new Persona({
    nombre: "Juan",
    apellido: "Perez",
    dni: "30555777",
    id: generadorDeIds.next(),
  });
  await personasRepo.add(persona1);

  console.log("-----------------------------");
  console.log("3) Obtener todas las personas");
  mostrar(await personasRepo.getAll());

  console.log("-----------------------------");
  console.log("4) Incorporar otra persona");
  const persona2 = new Persona({
    nombre: "Pedro",
    apellido: "Suarez",
    dni: "35678907",
    id: generadorDeIds.next(),
  });
  await personasRepo.add(persona2);

  console.log("-----------------------------");
  console.log("5) Obtener todas las personas");
  mostrar(await personasRepo.getAll());

  console.log("--------------------------------");
  console.log("6) Obtener una persona por su id");
  mostrar(await personasRepo.getById(persona2.id));

  console.log("-----------------------------");
  console.log("7) Eliminar una persona por su id");
  mostrar(await personasRepo.removeById(persona2.id));

  console.log("-----------------------------");
  console.log("8) Obtener todas las personas");
  mostrar(await personasRepo.getAll());

  console.log("--------------------------------");
  console.log("9) Borrar todas las personas");
  await personasRepo.removeAll();

  console.log("-----------------------------");
  console.log("10) Obtener todas las personas");
  mostrar(await personasRepo.getAll());
}

start();

//---------------

function mostrar(data) {
  if (Array.isArray(data)) {
    if (data.length > 0) {
      for (const persona of data) {
        console.log(new PersonaMostrable(persona).comoTextoPlano());
      }
    } else {
      console.log("no hay datos para mostrar");
    }
  } else {
    console.log(new PersonaMostrable(data).comoTextoPlano());
  }
}
