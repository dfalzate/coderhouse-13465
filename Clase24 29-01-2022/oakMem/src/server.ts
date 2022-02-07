import { Application } from "./deps.ts";
import UserRouter from "./routes/user.routes.ts";
import { logger } from "./middlewares/logger.ts";

const app = new Application();

app.use(logger);
app.use(UserRouter.routes());

console.log("http://localhost:9000");
await app.listen({ port: 9000 });
