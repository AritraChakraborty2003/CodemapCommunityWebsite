import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
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
    Collection: "messages",
  }
);

const messages = mongoose.model("messages", MessageSchema);
export { messages };
