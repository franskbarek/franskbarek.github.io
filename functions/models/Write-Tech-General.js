import mongoose from "mongoose";

const WriteTechGeneralSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "franskbarek",
    },
    photo: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("WriteTechGeneral", WriteTechGeneralSchema);
