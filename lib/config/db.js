import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

const connectDb = async () => {
    await mongoose.connect(process.env.REACT_APP_MONGO_URI);
    console.log("DB connected");
}

export default connectDb