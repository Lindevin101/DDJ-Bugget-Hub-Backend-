import mongoose from "mongoose";

const Schema = mongoose.Schema

let IncomeSchema = new Schema({
    _id:{type: nunm},
    MonthlyIncome: {type: Number},
  });

  export default mongoose.model("income", IncomeSchema);
