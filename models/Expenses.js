import mongoose from "mongoose";

const Schema = mongoose.Schema

let ExpenesesSchema = new Schema({
    _id:{type: nunm},
    Housing: {type: Number},
    Groceries: {type: Number},
    Utilities: {type: Number},
    Transportation: {type: Number},
    Entertainment: {type: Number},
    Banks: {type: Number},
    Savings: {type: Number},
    Misc: {type: Number},
  });

  export default mongoose.model("expenses", ExpensesSchema);
