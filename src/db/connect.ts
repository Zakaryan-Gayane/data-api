import mongoose from "mongoose";

export function dbConnect() {

  try {
     mongoose.connect('mongodb://127.0.0.1:27017/data')
     console.log("db connect ...");
  
  } catch (err) {
    console.error("Error during Data Source initialization", err)
  }
 
}
