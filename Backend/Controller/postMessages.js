import { messages } from "../Model/Messages.js";
const postMessages = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log(name);
    const messageObj = new messages({
      name: name,
      email: email,
      message: message,
    });

    messageObj.save();

    return res.status(200).send({ status: 200 });
  };
};
export { postMessages };
