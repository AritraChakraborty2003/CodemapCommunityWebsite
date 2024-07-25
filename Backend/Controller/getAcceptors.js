import { accepters } from "../Model/Accepters.js";
const getAcceptors = (req, res) => {
  accepters
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getAcceptors };
