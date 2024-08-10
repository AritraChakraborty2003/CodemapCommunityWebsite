import mongoose from "mongoose";

const progressSchema = mongoose.Schema(
  {
    projectname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    task: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "progresses",
  }
);

const progresses = mongoose.model("progresses", progressSchema);
export { progresses };
