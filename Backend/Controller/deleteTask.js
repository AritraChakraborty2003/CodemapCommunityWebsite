import { tasks } from "../Model/tasks.js";
const deletetask = () => {
  return (req, res) => {
    tasks
      .deleteMany({})
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { deletetask };
