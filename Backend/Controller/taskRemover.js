import { tasks } from "../Model/tasks.js";
const taskRemover = () => {
  return (req, res) => {
    const projectname = req.body.projectname;
    const email = req.body.email;
    const task = req.body.task;
    tasks
      .deleteOne({ projectname: projectname, email: email, task: task })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export { taskRemover };
