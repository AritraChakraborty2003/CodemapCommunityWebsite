import { references } from "../Model/references.js";
const postReferences = () => {
  return (req, res) => {
    const pname = req.body.pname;
    const link = req.body.link;
    const hiringletter = req.file.filename;

    const referencesObj = new references({
      projectname: pname,
      link: link,
      file: hiringletter,
    });

    referencesObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postReferences };
