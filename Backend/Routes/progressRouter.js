import express from "express";
import { getProgress } from "../Controller/getProgress.js";
import { postProgress } from "../Controller/postProgress.js";
const progressRouter = express.Router();

progressRouter.get("/", getProgress);
progressRouter.post("/", postProgress());

export { progressRouter };
