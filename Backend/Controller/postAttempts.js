import { attempts } from "../Model/attempted.js";

const postAttempts = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const score=req.body.score;
    const attempted = "true";

    const attemptsObj = new attempts({
      name: name,
      email: email,
      score:score,
      attempted: attempted,
    });

    attemptsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postAttempts };
