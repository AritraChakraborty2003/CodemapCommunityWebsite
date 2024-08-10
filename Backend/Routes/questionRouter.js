import express from "express";
import { getQuestions, getQuestionsId } from "../Controller/getQuestions.js";
import { postQuestions } from "../Controller/postQuestions.js";
import { getAttempts } from "../Controller/getAttempts.js";
import { postAttempts } from "../Controller/postAttempts.js";
import { UpdateScore } from "../Controller/updatescore.js";

const questionRouter = express.Router();

questionRouter.get("/trainings", getQuestions);
questionRouter.post("/trainings", postQuestions());
questionRouter.get("/attempts", getAttempts);
questionRouter.post("/attempts", postAttempts());
questionRouter.post("/update", UpdateScore());
questionRouter.get("/trainings/:id", getQuestionsId);

export { questionRouter };
