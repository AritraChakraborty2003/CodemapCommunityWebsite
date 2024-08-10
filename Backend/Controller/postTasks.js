import { tasks } from "../Model/tasks.js";
const postTasks = () => {
  return (req, res) => {
    const pname = req.body.pname;
    const email = req.body.email;
    const task1 = req.body.task1;
    const task2 = req.body.task2;
    const task3 = req.body.task3;
    const task4 = req.body.task4;

    const taskobj = new tasks({
      pname: pname,
      email: email,
      task: task1,
      attempted: "false",
    });

    taskobj.save();

    const taskobj1 = new tasks({
      pname: pname,
      email: email,
      task: task2,
      attempted: "false",
    });

    taskobj1.save();
    const taskobj2 = new tasks({
      pname: pname,
      email: email,
      task: task3,
      attempted: "false",
    });

    taskobj2.save();
    const taskobj3 = new tasks({
      pname: pname,
      email: email,
      task: task4,
      attempted: "false",
    });

    taskobj3.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postTasks };
