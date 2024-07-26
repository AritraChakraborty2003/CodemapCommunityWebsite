import mongoose from "mongoose";
const internSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    internid: {
      type: String,
      require: true,
    },
    hiringletter: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "interns",
  }
);

const interns = mongoose.model("interns", internSchema);
export { interns };
