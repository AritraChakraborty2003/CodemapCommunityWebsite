import { progresses } from "../Model/progress.js";
const postProgress = () => {
  return (req, res) => {
    const projectname = req.body.projectname;
    const email = req.body.email;
    const task = req.body.task;
    const link = req.body.link;

    const progressObj = new progresses({
      projectname: projectname,
      email: email,
      task: task,
      link: link,
    });

    progressObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postProgress };
