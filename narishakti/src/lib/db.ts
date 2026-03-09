import mongoose from "mongoose";

let isConnected = false;

export async function connectDb() {
  if (isConnected || !process.env.MONGO_URI) {
    return;
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}
