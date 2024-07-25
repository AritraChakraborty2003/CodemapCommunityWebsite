import { rejecters } from "../Model/Rejecters.js";
const PostRejecters = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const role = req.body.role;
    const category = req.body.category;
    const resume = req.body.resume;

    const rejectersObj = rejecters({
      name: name,
      email: email,
      PhoneNumber: phone,
      role: role,
      category: category,
      resume: resume,
    });

    rejectersObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { PostRejecters };
