import express from "express";
import { postInterns } from "../Controller/postInterns.js";
import { getInterns, getInternID } from "../Controller/getInterns.js";
import multer from "multer";
import { postInternsLeave } from "../Controller/postInternsLeave.js";
import { getInternsLeave } from "../Controller/getInternsLeave.js";
import { findInterns } from "../Controller/findInterns.js";
import fs from "fs";
import { getSuggestion } from "../Controller/getsuggestions.js";
import { getComplaints } from "../Controller/getcomplaints.js";
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
InternsRouter.get("/:id", getInternID);
InternsRouter.post("/apply", upload.single("file"), postInternsLeave());
InternsRouter.post("/find", findInterns());
InternsRouter.post("/", upload.single("file"), postInterns());

export { InternsRouter };
