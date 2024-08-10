import mongoose from "mongoose";

const refsSchema = mongoose.Schema(
  {
    projectname: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "references",
  }
);

const references = mongoose.model("references", refsSchema);
export { references };
