import { openings } from "../Model/Openings.js";
const deleteOpenings = () => {
  return (req, res) => {
    const role = req.body.role;
    openings
      .deleteOne({ role: role })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { deleteOpenings };
