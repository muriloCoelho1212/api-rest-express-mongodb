import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  publishing_company: { type: String },
  price: { type: Number },
  number_pages: { type: Number }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
