import express from "express";
import { getProgress } from "../Controller/getProgress.js";
import { postProgress } from "../Controller/postProgress.js";
import { deleteProgress } from "../Controller/deleteProgress.js";
const progressRouter = express.Router();

progressRouter.get("/", getProgress);
progressRouter.post("/", postProgress());
progressRouter.post("/delete", deleteProgress());

export { progressRouter };
