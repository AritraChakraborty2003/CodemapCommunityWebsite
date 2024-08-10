import express from "express";
import { getTask, getTaskId } from "../Controller/getTasks.js";
import { postTasks } from "../Controller/postTasks.js";
import { deletetask } from "../Controller/deleteTask.js";

const TaskRouter = express.Router();

TaskRouter.post("/delete", deletetask());
TaskRouter.get("/", getTask);
TaskRouter.get("/:id", getTaskId);
TaskRouter.post("/", postTasks());

export { TaskRouter };
