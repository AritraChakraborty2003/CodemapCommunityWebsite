import express from "express";
import { getQuestions, getQuestionsId } from "../Controller/getQuestions.js";
import { postQuestions } from "../Controller/postQuestions.js";

const questionRouter = express.Router();

questionRouter.get("/trainings", getQuestions);
questionRouter.post("/trainings", postQuestions());
questionRouter.get("/trainings/:id", getQuestionsId);

export { questionRouter };
