import { leaves } from "../Model/Leave.js";
const getInternsLeave = (req, res) => {
  leaves
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getInternsLeave };
