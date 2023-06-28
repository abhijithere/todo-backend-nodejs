import express from "express"
import { deleteTask, getMytask, newtask, updateTask } from "../Controllers/tasks.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/new",isAuthenticated,newtask)
router.get("/my",isAuthenticated,getMytask)

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default router;