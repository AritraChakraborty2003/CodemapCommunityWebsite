import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import { RejectedRouters } from "./Routes/RejectersRouter.js";
import DBConnectFunction from "./Connection/dbConnect.js";
import { genRouter } from "./Routes/GeneralRouter.js";
import { messageRouter } from "./Routes/MessagesRouter.js";
import { OpeningsRouter } from "./Routes/OpeningsRouter.js";
import { applicationRouter } from "./Routes/applicationRouter.js";
import { acceptedRouter } from "./Routes/accepted.js";
import { InternsRouter } from "./Routes/InternsRouter.js";
import { TrainingsRouter } from "./Routes/TrainingsRouter.js";
import { complaintsRouter } from "./Routes/complaintsRouter.js";
import { leaverouter } from "./Routes/leaveRouter.js";
import { questionRouter } from "./Routes/questionRouter.js";
import { suggestionsRouter } from "./Routes/suggestionsRouter.js";
import { videosRouter } from "./Routes/videosRouter.js";
import { TaskRouter } from "./Routes/TaskRouter.js";
import { ReferenceRouter } from "./Routes/ReferenceRouter.js";
import { progressRouter } from "./Routes/progressRouter.js";
import { ReportRouter } from "./Routes/ReportRouter.js";
import { DeadlineRouter } from "./Routes/DeadlineRouter.js";

//The applications basics configurations
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("uploads"));
DBConnectFunction(`${process.env.MONGODB_URI}`);

//The GET and POST request use cases
app.use("/", genRouter);
app.use("/api/messages", messageRouter);
app.use("/api/Openings", OpeningsRouter);
app.use("/api/apply", applicationRouter);
app.use("/api/accepted", acceptedRouter);
app.use("/api/rejected", RejectedRouters);
app.use("/api/interns", InternsRouter);
app.use("/api/trainings", TrainingsRouter);
app.use("/api/complaint", complaintsRouter);
app.use("/api/suggestion", suggestionsRouter);
app.use("/api/leave", leaverouter);
app.use("/api/videos", videosRouter);
app.use("/api/questions", questionRouter);
app.use("/api/task", TaskRouter);
app.use("/api/references", ReferenceRouter);
app.use("/api/progress", progressRouter);
app.use("/api/reports", ReportRouter);
app.use("/api/deadline", DeadlineRouter);

//app listen logic
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
