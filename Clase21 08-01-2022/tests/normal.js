const Todos = require("./todos.js");

const todos = new Todos();

console.log(todos.list());
todos.add("tarea1");
console.log(todos.list());
todos.add("tarea2");
console.log(todos.list());
todos.complete("tarea1");
console.log(todos.list());
todos.saveToFile();
console.log(todos.list());
