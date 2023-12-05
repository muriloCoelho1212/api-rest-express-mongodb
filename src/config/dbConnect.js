import mongoose from "mongoose"

function connectDb() {
    mongoose.connect(process.env.DB_CONNECT_STRING ?? '')

    return mongoose.connection
}

export default connectDb