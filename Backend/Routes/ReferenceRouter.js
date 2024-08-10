import express from "express";
import multer from "multer";
import fs from "fs";
import { getReferences, getReferencesId } from "../Controller/getReferences.js";
import { postReferences } from "../Controller/postRefereneces.js";
const ReferenceRouter = express.Router();
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

ReferenceRouter.get("/", getReferences);
ReferenceRouter.get("/:id", getReferencesId);
ReferenceRouter.post("/", upload.single("file"), postReferences());

export { ReferenceRouter };
