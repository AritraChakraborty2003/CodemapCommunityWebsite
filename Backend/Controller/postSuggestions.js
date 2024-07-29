import { suggestions } from "../Model/suggestions.js";
const postSuggestion = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const suggestionsObj = new suggestions({
      name: name,
      email: email,
      message: message,
    });
    suggestionsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postSuggestion };
