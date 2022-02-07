import { Router } from "../deps.ts";
import * as UserHandlers from "../handlers/user.handlers.ts";

const router = new Router({
  prefix: "/users",
});

router.get("/", UserHandlers.getUsers);
router.get("/:userId", UserHandlers.getUser);
router.post("/", UserHandlers.createUser);
router.patch("/:userId", UserHandlers.updateUser);
router.delete("/:userId", UserHandlers.deleteUser);

export default router;
