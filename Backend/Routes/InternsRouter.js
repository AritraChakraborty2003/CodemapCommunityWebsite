import express from "express";
import { postInterns } from "../Controller/postInterns.js";
import { getInterns } from "../Controller/getInterns.js";
import multer from "multer";
import fs from "fs";
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

const InternsRouter = express.Router();
InternsRouter.get("/", getInterns);
InternsRouter.post("/", upload.single("file"), postInterns());

export { InternsRouter };
