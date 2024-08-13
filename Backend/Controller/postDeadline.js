import { deadlines } from "../Model/Deadline.js";
const postDeadlines = () => {
  return (req, res) => {
    const date = req.body.date;

    console.log(date);
    const deadlinesObj = new deadlines({
      deadline: date,
    });

    deadlinesObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postDeadlines };
