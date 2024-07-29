import { getComplaints } from "../Controller/getcomplaints.js";
import { postComplaints } from "../Controller/postComplaint.js";
import express from "express";

const complaintsRouter = express.Router();
complaintsRouter.get("/interns", getComplaints);
complaintsRouter.post("/interns", postComplaints());
export { complaintsRouter };
