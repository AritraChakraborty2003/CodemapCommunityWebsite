import express from "express";
import { getTask, getTaskId } from "../Controller/getTasks.js";
import { postTasks } from "../Controller/postTasks.js";

const TaskRouter = express.Router();

TaskRouter.get("/", getTask);
TaskRouter.get("/:id", getTaskId);
TaskRouter.post("/", postTasks());

export { TaskRouter };
