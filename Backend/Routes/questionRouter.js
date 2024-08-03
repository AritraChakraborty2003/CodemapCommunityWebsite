import express from "express"
import { getQuestions } from "../Controller/getQuestions.js";
import { postQuestions } from "../Controller/postQuestions.js";

const questionRouter=express.Router();

questionRouter.get("/trainings",getQuestions)
questionRouter.post("/trainings",postQuestions())

export {questionRouter}