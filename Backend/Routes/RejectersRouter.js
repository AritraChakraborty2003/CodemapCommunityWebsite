import express from "express";
import { getRejected } from "../Controller/getRejected.js";
import { PostRejecters } from "../Controller/PostRejecters";

const RejectedRouters = express.Router();
RejectedRouters.get("/", getRejected);
RejectedRouters.post("/", PostRejecters());
