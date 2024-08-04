import { questions } from "../Model/questions.js";
const getQuestions = (req, res) => {
  questions
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getQuestionsId = (req, res) => {
  const category = req.query.category;
  questions
    .find({ category: category })
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getQuestions, getQuestionsId };
