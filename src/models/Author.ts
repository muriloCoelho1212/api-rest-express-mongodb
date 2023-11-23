import mongoose from "mongoose"
import { IAuthor } from "../interfaces/IAuthor"

const authorSchema = new mongoose.Schema<IAuthor>({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: { type: String },
}, { versionKey: false })

const author = mongoose.model<IAuthor>("author", authorSchema)

export { author, authorSchema }

