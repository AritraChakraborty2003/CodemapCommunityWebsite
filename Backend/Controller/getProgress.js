import { progresses } from "../Model/progress.js";
const getProgress = (req, res) => {
  progresses
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getProgress };
