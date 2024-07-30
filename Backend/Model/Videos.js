import mongoose from "mongoose";

const videosSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    timestamp1: {
      type: String,
      require: true,
    },
    timestamp2: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "videos",
  }
);

const videos = mongoose.model("videos", videosSchema);
export { videos };
