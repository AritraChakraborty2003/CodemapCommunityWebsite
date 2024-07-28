import { syllabuss } from "../Model/syllabus.js";
const postSyllabus = () => {
  return (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const role = req.body.role;
    const topic1 = req.body.topic1;
    const topic2 = req.body.topic2;
    const topic3 = req.body.topic3;
    const topic4 = req.body.topic4;

    console.log([name, category, role, topic1, topic2]);

    const syllabussObj = new syllabuss({
      name: name,
      category: category,
      role: role,
      topic1: topic1,
      topic2: topic2,
      topic3: topic3,
      topic4: topic4,
    });

    syllabussObj.save();

    return res.status(200).send({ status: 200 });
  };
};

export { postSyllabus };
