import { references } from "../Model/references.js ";
const getReferences = (req, res) => {
  references
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getReferencesId = (req, res) => {
  const pname = req.query.projectname;
  references
    .find({ projectname: pname })
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getReferences, getReferencesId };
