import express from "express";
import { getAcceptors } from "../Controller/getAcceptors.js";
import { postAccepters } from "../Controller/postAccepters.js";
const acceptedRouter = express.Router();

acceptedRouter.get("/", getAcceptors);
acceptedRouter.post("/", postAccepters());
//acceptedRouter.post("/");

export { acceptedRouter };
