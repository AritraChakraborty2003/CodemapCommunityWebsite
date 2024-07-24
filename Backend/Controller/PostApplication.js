import { appliers } from "../Model/Appliers.js";
const postApplication = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const role = req.body.role;
    const category = req.body.category;
    const file = req.file.filename;

    const appliersObj = new appliers({
      name: name,
      email: email,
      PhoneNumber: phone,
      role: role,
      category: category,
      resume: file,
    });

    appliersObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postApplication };
