import mongoose from "mongoose";
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = { dbNAme: "cabjet-users" };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
