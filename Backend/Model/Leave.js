import mongoose from "mongoose";

const LeaveSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    leaveletter: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "leaves",
  }
);
const leaves = mongoose.model("leaves", LeaveSchema);
export { leaves };
