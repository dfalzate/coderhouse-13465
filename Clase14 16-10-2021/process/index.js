// const emoji = require('node-emoji')

process.on("exit", (code) => {
  setTimeout(() => {
    console.log("No debería salir");
  }, 5000);
  console.log("Código:", code);
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
});

// Diferencia entre console.log y stdout
console.log = function (d) {
  process.stdout.write(d + "\n");
};

process.stdout.write(`${emoji.get("fire")} Cualquier cosa\n`);

noExiste();

process.exit(1);

console.log(
  process.cwd(),
  process.pid,
  process.version,
  process.title,
  process.platform,
  process.memoryUsage(),
);
