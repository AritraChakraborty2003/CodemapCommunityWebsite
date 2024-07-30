import { videos } from "../Model/Videos.js";
const getVideos = (req, res) => {
  videos
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getVideos };
