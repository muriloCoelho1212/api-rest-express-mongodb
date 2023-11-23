import mongoose from "mongoose"
import { IBook } from "../interfaces/IBook"

const bookSchema = new mongoose.Schema<IBook>({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publishing_company: { type: String },
    price: { type: Number },
    number_pages: { type: Number }
}, { versionKey: false })

const book = mongoose.model<IBook>("books", bookSchema)

export default book