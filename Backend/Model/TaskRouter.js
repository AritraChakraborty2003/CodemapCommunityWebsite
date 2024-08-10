import express from "express";
import { getTask, getTaskId } from "../Controller/getTasks.js";
import { postTasks } from "../Controller/postTasks.js";
import { deletetask } from "../Controller/deleteTask.js";
import { updateTask } from "../Controller/updateTask.js";

const TaskRouter = express.Router();

TaskRouter.post("/delete", deletetask());
TaskRouter.post("/delete", deletetask());
TaskRouter.post("/update", updateTask());
TaskRouter.get("/:id", getTaskId);
TaskRouter.post("/", postTasks());
TaskRouter.get("/", getTask);

export { TaskRouter };
