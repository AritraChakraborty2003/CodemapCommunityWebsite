import express from "express";
import { DeleteApplication } from "../Controller/DeleteApplication.js";
import multer from "multer";
import fs from "fs";
import { postApplication } from "../Controller/PostApplication.js";
import {
  GetApplication,
  GetApplicationId,
} from "../Controller/GetApplication.js";
const applicationRouter = express.Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

applicationRouter.post("/", upload.single("file"), postApplication());
applicationRouter.post("/delete", DeleteApplication());
applicationRouter.get("/", GetApplication);
applicationRouter.get("/:id", GetApplicationId);

export { applicationRouter };
