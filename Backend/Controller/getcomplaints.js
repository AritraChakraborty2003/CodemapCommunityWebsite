import { complaints } from "../Model/complaints.js";
const getComplaints = (req, res) => {
  complaints
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getComplaints };
