import express from "express";
import { getOpenings, getOpeningsId } from "../Controller/getOpenings.js";
import { postOpenings } from "../Controller/postOpenings.js";
import { deleteOpenings } from "../Controller/deleteOpenings.js";
const OpeningsRouter = express.Router();

OpeningsRouter.get("/", getOpenings);
OpeningsRouter.get("/:id", getOpeningsId);
OpeningsRouter.post("/", postOpenings());
OpeningsRouter.post("/delete", deleteOpenings());

export { OpeningsRouter };
