"use strict";

const CupcakeModel = use("App/Models/Cupcake");

class CupcakeController {
  async getCupcakes(view) {
    const cupcakes = (await CupcakeModel.all()).toJSON();
    const html = await view.render("cupcake", { cupcakes });
    return html;
  }
}

module.exports = CupcakeController;
