import { interns } from "../Model/Interns.js";

const getInterns = (req, res) => {
  interns
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getInterns };
