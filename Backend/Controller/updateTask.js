import { tasks } from "../Model/tasks.js";

const updateTask = () => {
  return (req, res) => {
    const task = req.body.task;
    const projectname = req.body.projectname;

    tasks
      .findOne({ task: task, projectname: projectname })
      .then((doc) => {
        doc.attempted = "true";
        doc.save();
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};

export { updateTask };
