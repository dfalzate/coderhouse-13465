const cluster = require('cluster')
const http = require("http");
const nCpus = require("os").cpus().length;
const express = require("express");

if (cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`);
  for (let i = 0; i < nCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  console.log(`Worker PID ${process.pid}`);
  // http
  //   .createServer((req, res) => {
  //     res.writeHead(200);
  //     res.end(`Hello world ${process.pid}`);
  //   })
  //   .listen(8080);

  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const PORT = process.env.PORT || 3000;
  const server = app.listen(PORT, () =>
    console.log(`🚀 Server started on port http://localhost:${PORT}`),
  );
  server.on("error", (err) => console.log(err));
}