import { messages } from "../Model/Messages.js";
const getMessages = (req, res) => {
  messages
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getMessagesId = (req, res) => {
  messages
    .find({ email: req.query.email })
    .then((val) => res.json(val))
    .catch((err) => {
      console.log(err);
    });
};

export { getMessages, getMessagesId };
