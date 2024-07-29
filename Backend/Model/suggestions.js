import mongoose from "mongoose";
const suggestionSchema = mongoose.Schema(
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

const suggestions = mongoose.model("suggestions", suggestionSchema);
export { suggestions };
