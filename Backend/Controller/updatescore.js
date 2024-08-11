import { attempts } from "../Model/attempted.js";
const UpdateScore = () => {
  return (req, res) => {
    const email = req.body.email;

    attempts
      .findOne({ email: email })
      .then((doc) => {
        const updated_score = Number(doc.score) + 10;
        const stringValScore = updated_score.toString();
        doc.score = stringValScore;
        doc.save();
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};

export { UpdateScore };
