import minimist from "minimist";
import ProductosApi from "./api/ProductosApi.js";

async function start() {
  const argv = minimist(process.argv.slice(2));
  const { cmd, id, nombre, precio, stock } = argv;

  console.log("Instanciando la API");
  const productosApi = new ProductosApi();

  try {
    switch (cmd.toLowerCase()) {
      case "buscar":
        console.log(cmd);
        console.log(await productosApi.buscar(id));
        break;

      case "agregar":
        console.log(cmd);
        console.log(await productosApi.agregar({ nombre, precio, stock }));
        break;

      case "reemplazar":
        console.log(cmd);
        console.log(await productosApi.reemplazar(id, { nombre, precio, stock }));
        break;

      case "borrar":
        console.log(cmd);
        await productosApi.borrar(id);
        break;

      default:
        console.log("comando no válido:", cmd);
    }
  } catch (error) {
    console.log(error);
  }

  productosApi.exit();
}

start();
