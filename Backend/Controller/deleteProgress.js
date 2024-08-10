import { progresses } from "../Model/progress.js";
const deleteProgress = () => {
  return (req, res) => {
    const projectname = req.body.projectname;
    const email = req.body.email;
    progresses
      .deleteOne({ projectname: projectname, email: email })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { deleteProgress };
