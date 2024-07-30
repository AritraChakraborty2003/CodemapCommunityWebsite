import { videos } from "../Model/Videos.js";

const postVideos = () => {
  return (req, res) => {
    const name = req.body.name;
    const link = req.body.link;
    const category = req.body.category;
    const timestamp1 = req.body.timestamp1;
    const timestamp2 = req.body.timestamp2;

    const videosObj = new videos({
      name: name,
      link: link,
      category: category,
      timestamp1: timestamp1,
      timestamp2: timestamp2,
    });

    videosObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postVideos };
