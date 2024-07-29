import express from "express";
import { getSuggestion } from "../Controller/getsuggestions.js";
import { postSuggestion } from "../Controller/postSuggestions.js";

const suggestionsRouter = express.Router();
suggestionsRouter.get("/interns", getSuggestion);
suggestionsRouter.post("/interns", postSuggestion());

export { suggestionsRouter };
