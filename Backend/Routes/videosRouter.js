import express from "express";
import { getVideos } from "../Controller/getVideos.js";
import { postVideos } from "../Controller/postVideos.js";
import { deleteVideos } from "../Controller/deleteVideos.js";

const videosRouter = express.Router();

videosRouter.get("/trainings", getVideos);
videosRouter.post("/trainings", postVideos());
videosRouter.post("/delete", deleteVideos());

export { videosRouter };
