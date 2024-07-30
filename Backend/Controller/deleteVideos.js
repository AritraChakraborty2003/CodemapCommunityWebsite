import { videos } from "../Model/Videos.js";
const deleteVideos = () => {
  return (req, res) => {
    const name = req.body.name;
    videos
      .deleteOne({ name: name })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export { deleteVideos };
