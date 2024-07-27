import { interns } from "../Model/Interns.js";
const findInterns = () => {
  return (req, res) => {
    const email = req.body.email;
    const internid = req.body.internid;
    interns
      .findOne({ email: email, internid: internid })
      .then((val) => {
        if (val != null)
          return res.status(200).send({ status: 200, name: val.name });
        else return res.status(200).send({ status: 200, name: "Invalid user" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export { findInterns };
