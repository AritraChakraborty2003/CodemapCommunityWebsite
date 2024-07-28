import express from "express";
import { getsyllabus } from "../Controller/getsyllabus.js";
import { postSyllabus } from "../Controller/postsyllabus.js";

const TrainingsRouter = express.Router();

TrainingsRouter.get("/syllabus", getsyllabus);
TrainingsRouter.post("/syllabus", postSyllabus());

export { TrainingsRouter };
