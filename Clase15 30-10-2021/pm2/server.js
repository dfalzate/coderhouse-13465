console.log("start");
const express = require("express");
const emoji = require("node-emoji");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = Number(process.argv.slice(2)[0]) || 3000;

app.get("*", (req, res) => {
  console.log(`PID ${process.pid}`);
  res.status(200).send(`Servidor express en <b>${PORT}</b> - PID ${process.pid} `);
});

const server = app.listen(PORT, () =>
  console.log(emoji.get("fire"), `Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
