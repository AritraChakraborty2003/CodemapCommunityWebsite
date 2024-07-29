import { complaints } from "../Model/complaints.js";
const postComplaints = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const complaintsObj = new complaints({
      name: name,
      email: email,
      message: message,
    });

    complaintsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postComplaints };
