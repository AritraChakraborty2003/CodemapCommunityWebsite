import mongoose from "mongoose";

const deadlineSchema = mongoose.Schema(
  {
    deadline: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "deadlines",
  }
);

const deadlines = mongoose.model("deadlines", deadlineSchema);
export { deadlines };
