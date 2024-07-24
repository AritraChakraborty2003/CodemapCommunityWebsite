import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import DBConnectFunction from "./Connection/dbConnect.js";
import { genRouter } from "./Routes/GeneralRouter.js";
import { messageRouter } from "./Routes/MessagesRouter.js";
import { OpeningsRouter } from "./Routes/OpeningsRouter.js";
import { applicationRouter } from "./Routes/applicationRouter.js";

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

//app listen logic
app.listen(`${process.env.PORT}`, () => {
  console.log("Backend Connected");
});
