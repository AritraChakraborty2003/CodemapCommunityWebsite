import mongoose from "mongoose";

const complaintsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "suggestions",
  }
);

const complaints = mongoose.model("complaints", complaintsSchema);
export { complaints };
