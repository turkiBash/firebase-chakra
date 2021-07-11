import mongoose from "mongoose";

const testDatabase = mongoose.Schema({
  name: String,
  age: String,
  occ: String,
  sex: String,
});

export default mongoose.model("details", testDatabase);
