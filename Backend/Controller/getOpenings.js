import { openings } from "../Model/Openings.js";

const getOpenings = (req, res) => {
  openings
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getOpeningsId = (req, res) => {
  if (req.query.category === undefined) {
    openings
      .find({ role: req.query.role })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.query.role === undefined) {
    openings
      .find({ category: req.query.category })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    openings
      .find({ category: req.query.category, role: req.query.role })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export { getOpenings, getOpeningsId };
