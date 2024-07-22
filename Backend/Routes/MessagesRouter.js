import express from "express";
import { getMessages, getMessagesId } from "../Controller/getMessages.js";
import { postMessages } from "../Controller/postMessages.js";
const messageRouter = express.Router();

messageRouter.get("/", getMessages);
messageRouter.post("/", postMessages());
messageRouter.get("/:id", getMessagesId);

export { messageRouter };
