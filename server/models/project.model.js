import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    trim: true,
  },

  firstname: {
    type: String,
    required: "First name is required",
    trim: true,
  },

  lastname: {
    type: String,
    required: "Last name is required",
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },

  completion: {
    type: Date,
  },

  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Project", ProjectSchema);