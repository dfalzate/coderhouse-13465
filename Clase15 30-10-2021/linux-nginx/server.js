// const http = require("http");

// const server = http.createServer((req, res) => {
//   const urlPath = req.url;
//   if (urlPath === "/overview") {
//     res.end('Welcome to the "overview page" of the nginX project');
//   } else if (urlPath === "/api") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//       JSON.stringify({
//         product_id: "xyz12u3",
//         product_name: "NginX injector",
//       })
//     );
//   } else {
//     res.end(`Successfully started a server - PID ${process.pid}`);
//   }
// });

// server.listen(3000, "localhost", () => {
//   console.log("Listening for request");
// });

const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/data", (req, res) => {
  console.log(`PID ${process.pid}`);
  res.status(200).send(`PID ${process.pid}`);
});

const PORT = Number(process.argv[2]) || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
