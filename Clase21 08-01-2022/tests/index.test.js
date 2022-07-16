const Todos = require("./todos.js");
const assert = require("assert").strict;

describe("Test de integración de tareas", () => {
  it("Debería crear el contenedor de tareas vació", () => {
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });
  it("Debería adicionar tareas correctamente", () => {
    const todos = new Todos();
    todos.add("tarea1");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [{ title: "tarea1", completed: false }]);
  });
  it("Debería marcar como completado una tarea", () => {
    const todos = new Todos();
    todos.add("tarea1");
    todos.add("tarea2");
    todos.complete("tarea2");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "tarea1", completed: false },
      { title: "tarea2", completed: true },
    ]);
  });
});

describe("Comprobar errores", () => {
  it("Debería dar un error cuando no hay tareas", () => {
    const todos = new Todos();
    const errorEsperado = new Error("No hay tareas");
    assert.throws(() => {
      todos.complete("tarea");
    }, errorEsperado);
  });
  it("Debería dar error cuando la tarea no existe", () => {
    const todos = new Todos();
    todos.add("tarea1");
    const errorEsperado = new Error("Tarea no encontrada");
    assert.throws(() => {
      todos.complete("tarea");
    }, errorEsperado);
  });
});
