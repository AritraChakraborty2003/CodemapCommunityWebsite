import { openings } from "../Model/Openings.js";

const postOpenings = () => {
  return (req, res) => {
    const role = req.body.role;
    const descr = req.body.description;
    const type = req.body.type;
    const category = req.body.category;

    const openingsObj = new openings({
      role: role,
      description: descr,
      type: type,
      category: category,
    });

    openingsObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postOpenings };
