import mongoose from "mongoose";
const BudgetSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', 
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    expenses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expenses',
      },
    ],
  });


  export default mongoose.model("budget", BudgetSchema);
