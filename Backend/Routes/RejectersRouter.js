import express from "express";
import { getRejected } from "../Controller/getRejected.js";
import { PostRejecters } from "../Controller/PostRejecters.js";

const RejectedRouters = express.Router();
RejectedRouters.get("/", getRejected);
RejectedRouters.post("/", PostRejecters());

export { RejectedRouters };
