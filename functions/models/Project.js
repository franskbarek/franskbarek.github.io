import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    site_link: {
      type: String,
      required: false,
    },
    code_link: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
