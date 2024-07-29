import { leaves } from "../Model/Leave.js";
const postInternsLeave = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const file = req.file.filename;

    const leavesObj = new leaves({
      name: name,
      email: email,
      leaveletter: file,
    });

    leavesObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postInternsLeave };
