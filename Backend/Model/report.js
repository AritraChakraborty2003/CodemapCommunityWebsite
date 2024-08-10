import mongoose from "mongoose";
const reportSchema = mongoose.Schema(
  {
    projectname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    task: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "reports",
  }
);

const reports = mongoose.model("reports", reportSchema);
export { reports };
