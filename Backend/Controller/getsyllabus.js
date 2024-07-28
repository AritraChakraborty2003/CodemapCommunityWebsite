import { syllabuss } from "../Model/syllabus.js";
const getsyllabus = (req, res) => {
  syllabuss
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getsyllabus };
