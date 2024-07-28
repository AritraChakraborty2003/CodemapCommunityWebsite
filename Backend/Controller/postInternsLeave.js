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
  };
};

export { postInternsLeave };
