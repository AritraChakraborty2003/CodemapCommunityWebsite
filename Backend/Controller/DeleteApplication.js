import { appliers } from "../Model/Appliers.js";
const DeleteApplication = () => {
  return (req, res) => {
    const email = req.body.email;
    appliers
      .deleteOne({ email: email })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { DeleteApplication };
