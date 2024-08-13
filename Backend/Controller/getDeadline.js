import { deadlines } from "../Model/Deadline.js";

const getDeadlines = (req, res) => {
  deadlines
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getDeadlines };
