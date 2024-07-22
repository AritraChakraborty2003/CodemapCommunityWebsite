import express from "express";
import { generalGet } from "../Controller/generalGet.js";
const genRouter = express.Router();

genRouter.get("/", generalGet);

export { genRouter };
