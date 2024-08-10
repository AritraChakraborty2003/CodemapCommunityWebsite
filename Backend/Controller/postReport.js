import { reports } from "../Model/report.js";
const postReport = () => {
  return (req, res) => {
    const projectname = req.body.projectname;
    const email = req.body.email;
    const task = req.body.task;

    const reportsObj = new reports({
      projectname: projectname,
      email: email,
      task: task,
    });

    reportsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postReport };
