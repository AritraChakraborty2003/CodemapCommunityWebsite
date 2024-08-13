import express from "express";
import { getDeadlines } from "../Controller/getDeadline.js";
import { postDeadlines } from "../Controller/postDeadline.js";

const DeadlineRouter = express.Router();

DeadlineRouter.get("/", getDeadlines);
DeadlineRouter.post("/", postDeadlines());

export { DeadlineRouter };
