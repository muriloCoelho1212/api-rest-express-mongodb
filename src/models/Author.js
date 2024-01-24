import mongoose from "mongoose";
import { errorMessages } from "../helpers/errorMessages.js";

const authorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { 
    type: String, required: [true, errorMessages.AUTHOR_NAME_IS_REQUIRED]
  },
  nationality: { type: String },
}, { versionKey: false });

const author = mongoose.model("author", authorSchema);

export { author, authorSchema };

