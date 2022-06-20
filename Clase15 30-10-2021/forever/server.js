import express from "express";

console.log(process.argv);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res
    .status(200)
    .send(`Servidor express en <b>${PORT}</b> - PID ${process.pid} ${process.argv.slice(2)}`);
});

const PORT = process.argv.slice(2)[0] || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
