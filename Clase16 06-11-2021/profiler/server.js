import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const users = {};

app.get("/getUsers", (req, res) => {
  res.json({ users });
});

app.get("/newUser", (req, res) => {
  let userName = req.query.userName || "";
  let password = req.query.password || "";

  if (!userName || !password || users[userName]) return res.sendStatus(400);

  const salt = crypto.randomBytes(128).toString("base64");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  users[userName] = { salt, hash };

  res.status(200).json(users);
});

app.get("/auth-bloq", (req, res) => {
  let userName = req.query.userName || "";
  let password = req.query.password || "";

  if (!userName || !password || !users[userName]) process.exit(-1);

  const { salt, hash } = users[userName];

  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    process.exit(-1);
  }
});

app.get("/auth-nobloq", (req, res) => {
  let userName = req.query.userName || "";
  let password = req.query.password || "";

  if (!userName || !password || !users[userName]) process.exit(-1);

  crypto.pbkdf2(password, users[userName].salt, 10000, 512, "sha512", (err, hash) => {
    if (users[userName].hash.toString() === hash.toString()) {
      res.sendStatus(200);
    } else {
      process.exit(-1);
    }
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
