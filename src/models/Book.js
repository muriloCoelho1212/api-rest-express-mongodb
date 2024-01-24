import mongoose from "mongoose";
import { errorMessages } from "../helpers/errorMessages.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { 
    type: String, 
    required: [true, errorMessages.BOOK_TITLE_IS_REQUIRED]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    required: [true, errorMessages.BOOK_AUTHOR_IS_REQUIRED]
  },
  publishing_company: { 
    type: String,
    required: [true, errorMessages.PUBLISHING_COMPANY_BOOK_IS_REQUIRED]
  },
  price: { type: Number },
  number_pages: { type: Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
