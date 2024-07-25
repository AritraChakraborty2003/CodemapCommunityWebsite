import { accepters } from "../Model/Accepters.js";
const postAccepters = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const role = req.body.role;
    const category = req.body.category;
    const resume = req.body.resume;

    const acceptersObj = accepters({
      name: name,
      email: email,
      PhoneNumber: phone,
      role: role,
      category: category,
      resume: resume,
    });

    acceptersObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postAccepters };
