import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
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
    attempted: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "tasks",
  }
);

const tasks = mongoose.model("tasks", taskSchema);
export { tasks };
