import { questions } from "../Model/questions.js";
const postQuestions = () => {
  return (req, res) => {
    const category = req.body.category;
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;
    const correct = req.body.correct;

    const questionsObj = new questions({
      category: category,
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correct: correct,
    });

    questionsObj.save();
  };
};
export { postQuestions };
