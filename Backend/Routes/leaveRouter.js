import express from "express";
import { getInternsLeave } from "../Controller/getInternsLeave.js";
import { postInternsLeave } from "../Controller/postInternsLeave.js";

const leaverouter = express.Router();
leaverouter.get("/", getInternsLeave);
leaverouter.post("/", postInternsLeave);

export { leaverouter };
