import ProductosRepo from "./repositories/ProductosRepo.js";
import Producto from "./modelos/Producto.js";
import ProductoMostrable from "./adaptadores/ProductoMostrable.js";

async function start() {
  const repo = new ProductosRepo();

  const p1 = new Producto({
    id: 1,
    nombre: "sonrisas",
    precio: 100,
    stock: 100,
  });

  const p2 = new Producto({
    id: 2,
    nombre: "tita",
    precio: 80,
    stock: 100,
  });

  function mostrarTodos(prods) {
    prods.forEach((p) => console.log(new ProductoMostrable(p).comoTextoPlano()));
  }

  function mostrar(prod) {
    console.log(new ProductoMostrable(prod).comoTextoPlano());
  }

  console.log("\nagregando dos.");
  await repo.add(p1);
  await repo.add(p2);

  console.log("\nmostrando todos:");
  mostrarTodos(await repo.getAll());

  console.log("\nborrando uno:");
  mostrar(await repo.removeById(p1.id));

  console.log("\nmostrando todos:");
  mostrarTodos(await repo.getAll());
}

start();
