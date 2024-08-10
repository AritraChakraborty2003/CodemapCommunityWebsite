import { tasks } from "../Model/tasks.js";
const getTask = (req, res) => {
  tasks
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTaskId = (req, res) => {
  const email = req.query.email;
  const attempted = req.query.attempted;
  tasks
    .find({ email: email, attempted: attempted })
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getTask, getTaskId };
