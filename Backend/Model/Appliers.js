import mongoose from "mongoose";

const AppliersSchema = mongoose.Schema(
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
    Collection: "appliers",
  }
);

const appliers = mongoose.model("appliers", AppliersSchema);
export { appliers };
