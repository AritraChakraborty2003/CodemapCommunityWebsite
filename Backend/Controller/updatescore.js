import { attempts } from "../Model/attempted.js";
const UpdateScore = () => {
  return (req, res) => {
    const email = req.body.email;

    attempts
      .findOne({ email: email })
      .then((doc) => {
        doc.score += 10;
        doc.save();
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};

export { UpdateScore };
