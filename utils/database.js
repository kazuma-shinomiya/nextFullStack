import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://root:vY5pBGGgv8jDwYmX@cluster0.vgyqd.mongodb.net/appDataBase?retryWrites=true&w=majority")
    console.log("connect successssssssssssssssssssssssssssssssssssssssssssssssss")
  } catch (error) {
    console.log("connect noooooooooooooooooooooooooooooooooo")
    throw new Error()
  }
}

export default connectDB