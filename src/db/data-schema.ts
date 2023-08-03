import mongoose from "mongoose";
import { dbConnect } from "./connect";

const docsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  to: {
    type: String,
    null: false
  },
  subject: {
    type: String,
    null: false
  },
  from: {
    type: String,
    required: true
  },
  tite: {
    type: String,
    required: true,
  },
  descripton: {
    type: String,
    default: "",
  }
},
  { autoCreate: false, autoIndex: false },
  
);

const docs = mongoose.model("Docs", docsSchema);

module.exports = docs;