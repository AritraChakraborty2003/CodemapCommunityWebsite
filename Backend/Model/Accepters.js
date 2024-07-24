import mongoose from "mongoose";

const AcceptersSchema = mongoose.Schema(
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
    Collection: "accepters",
  }
);

const accepters = mongoose.model("accepters", AcceptersSchema);
export { accepters };
