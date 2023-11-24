import { Router } from "express";
import { createTodo, viewTodo } from "../controller/todoController";

const router: Router = Router();

router.route("/create-todo").post(createTodo);
router.route("/view-todo").get(viewTodo);

export default router;
