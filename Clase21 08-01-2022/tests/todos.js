const fs = require("fs");

class Todo {
  constructor() {
    this.todos = [];
  }

  list() {
    return this.todos;
  }

  add(title) {
    const todo = {
      title,
      completed: false,
    };
    this.todos.push(todo);
  }

  complete(title) {
    if (this.todos.length === 0) {
      throw new Error("No hay tareas");
    }
    let found = false;
    this.todos.map((todo) => {
      if (todo.title === title) {
        todo.completed = true;
        found = true;
      }
    });
    if (!found) {
      throw new Error("Tarea no encontrada");
    }
  }

  async saveToFile() {
    // let fileContent = "";
    // this.todos.map((todo) => {
    //   fileContent += `${todo.title},${todo.completed}`
    // })
    return fs.writeFileSync("todos.json", JSON.stringify(this.todos));
  }
}

module.exports = Todo;
