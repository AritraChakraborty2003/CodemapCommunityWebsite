import { suggestions } from "../Model/suggestions.js";
const getSuggestion = (req, res) => {
  suggestions
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getSuggestion };
