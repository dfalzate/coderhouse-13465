import koa from "koa";
import emoji from "node-emoji";
import dotenv from "dotenv";
import koaBody from "koa-body";

import bookImport from "./routes/books.route.js";

dotenv.config();

const app = new koa();
app.use(koaBody());

// app.use(async (ctx) => {
//   console.log(ctx);
//   ctx.body = "Hello Koa!";
// });

app.use(bookImport.routes());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(emoji.get("fire"), `Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
