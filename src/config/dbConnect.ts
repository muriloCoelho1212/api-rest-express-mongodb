import mongoose from "mongoose"

async function connectDb() {
    await mongoose.connect(process.env.DB_CONNECT_STRING ?? '')

    return mongoose.connection
}

export default connectDb