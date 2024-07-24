import mongoose from "mongoose";

const OpeningsSchema = mongoose.Schema(
  {
    role: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    type: {
      require: true,
      type: String,
    },
    category: {
      require: true,
      type: String,
    },
  },
  {
    collection: "openings",
  }
);

const openings = mongoose.model("openings", OpeningsSchema);
export { openings };
