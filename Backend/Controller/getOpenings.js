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
      .find({ type: req.query.type })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.query.type === undefined) {
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
      .find({ category: req.query.category, type: req.query.type })
      .then((val) => {
        res.json(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export { getOpenings, getOpeningsId };
