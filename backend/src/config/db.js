import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

export const connectDB = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log("MongoDB connected:", MONGODB_URI);
};

export const getDBStatus = () => {
  const state = mongoose.connection.readyState;
  return state === 1 ? "connected" : "disconnected";
};
