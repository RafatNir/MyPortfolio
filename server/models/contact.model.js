import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
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
});
 
export default mongoose.model("Contact", ContactSchema);
