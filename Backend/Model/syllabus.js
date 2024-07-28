import mongoose from "mongoose";
const SyllabusSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requie: true,
    },
    category: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    topic1: {
      type: String,
      require: true,
    },
    topic2: {
      type: String,
      require: true,
    },
    topic3: {
      type: String,
      require: true,
    },
    topic4: {
      type: String,
      require: true,
    },
  },
  { Collection: "syllabuss" }
);

const syllabuss = mongoose.model("syllabuss", SyllabusSchema);
export { syllabuss };
