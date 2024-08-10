import { progresses } from "../Model/progress.js";
const deleteProgress = () => {
  return (req, res) => {
    const projectname = req.body.projectname;
    const task = req.body.task;
    progresses
      .deleteOne({ projectname: projectname, task: task })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { deleteProgress };
