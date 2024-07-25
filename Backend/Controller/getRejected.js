import { rejecters } from "../Model/Rejecters.js";
const getRejected = (req, res) => {
  rejecters
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getRejected };
