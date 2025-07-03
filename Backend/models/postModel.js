import mongoose from "mongoose";

const userpostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["lost", "found"],
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
});

export const userPost = mongoose.model("post", userpostSchema);
