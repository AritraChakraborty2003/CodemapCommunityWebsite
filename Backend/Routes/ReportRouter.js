import express from "express";
import { getReports } from "../Controller/getReports.js";
import { postReport } from "../Controller/postReport.js";
const ReportRouter = express.Router();

ReportRouter.get("/", getReports);
ReportRouter.post("/", postReport());

export { ReportRouter };
