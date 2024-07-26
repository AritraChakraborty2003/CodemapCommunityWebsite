import { interns } from "../Model/Interns.js";
import { sendMail } from "./codemail.js";
const postInterns = () => {
  return (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const internid = req.body.internid;
    const role = req.body.role;
    const hiringletter = req.file.filename;

    const internsObj = new interns({
      name: name,
      email: email,
      role: role,
      internid: internid,
      hiringletter: hiringletter,
    });

    internsObj.save();

    sendMail(
      email,
      "Selection mail for the internship role",
      `Dear ${
        " " + name + " "
      } congratulations on being selected for the role  ${" "}${role}  intern in our firm Codemap. I hope we have a memorable journey ahead regards from 
      Abhishek Kumar Pandey (Managing Partner(HR and Management)) `,
      hiringletter
    )
      .then((res) => {
        console.log("Email Sent...", res);
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};

export { postInterns };
