import mongoose from "mongoose";

const attemptedSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    score: {
      type: String,
      require: true,
    },
    attempted: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "attempts",
  }
);

const attempts = mongoose.model("attempts", attemptedSchema);
export { attempts };
