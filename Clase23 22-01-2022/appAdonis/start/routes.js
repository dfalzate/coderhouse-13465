"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.on("/").render("welcome");
Route.get("/message", () => {
  return "Hola Adonis";
});

Route.get("/auth", () => {
  return "Esta ruta esta protegida";
}).middleware("auth");

Route.get("/middleware", () => {
  return "Otro middleware";
}).middleware((ctx, next) => {
  console.log("Ejecutando el middleware");
  next();
});

const CupcakeModel = use("App/Models/Cupcake");
const CupcakeController = use("App/Controllers/Http/CupcakeController");

const cupcakeController = new CupcakeController();

Route.get("/cupcakes", async () => {
  return await CupcakeModel.all();
});

Route.get("/cupcakesView", async ({ view }) => {
  // const cupcakes = (await Cupcake.all()).toJSON();
  // const html = await view.render("cupcake", { cupcakes });
  // return html;

  const response = await cupcakeController.getCupcakes(view);
  return response;
});
