import { appliers } from "../Model/Appliers.js";
const GetApplication = (req, res) => {
  appliers
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const GetApplicationId = (req, res) => {
  const category = req.query.category;
  const name = req.query.name;
  const email = req.query.email;

  if (name != undefined && email != undefined) {
    appliers
      .findOne({ name: name, email: email })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    appliers
      .find({ category: category })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
export { GetApplication, GetApplicationId };
