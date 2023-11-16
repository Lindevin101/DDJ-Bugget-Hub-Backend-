import mongoose from "mongoose";

const Schema = mongoose.Schema

let ExpenesesSchema = new Schema({
  title: { type: String },
  cost: { type: Number }
});

export default mongoose.model("expenses", ExpenesesSchema);
