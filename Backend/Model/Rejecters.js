import mongoose from "mongoose";

const rejectersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    PhoneNumber: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    resume: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "rejecters",
  }
);

const rejecters = mongoose.model("rejecters", rejectersSchema);
export { rejecters };
