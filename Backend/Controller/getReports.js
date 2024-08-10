import { reports } from "../Model/report.js";
const getReports = () => {
  reports
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getReports };