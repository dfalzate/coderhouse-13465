import express from "express";
import emoji from "node-emoji";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import operaciones from "operaciones-coderhouse";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", (req, res) => {
  console.log("Hola yarn");
  const suma = operaciones.suma(1, 2);
  const resta = operaciones.resta(1, 2);
  const multiplicacion = operaciones.multiplicacion(1, 2);
  const division = operaciones.division(1, 2);
  res
    .status(200)
    .send(
      `Operaciones suma:${suma}, resta:${resta}, multiplicacion:${multiplicacion}, division:${division}`,
    );
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(emoji.get("fire"), `Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
