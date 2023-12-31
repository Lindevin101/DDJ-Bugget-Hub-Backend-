import Budget from "../models/Budget.js";
import Expenses from "../models/Expenses.js";

export const addExpenseToBudget = async (req, res) => {
  try {
    // Create expense in DB
    const expense = new Expenses(req.body);
    await expense.save();

    // Push expense into Budget
    const { budgetId } = req.params;

    const budget = await Budget.findByIdAndUpdate(budgetId, { $push: { expenses: expense } });

    if (budget) {
        return res.json(budget);
    }
  
    res.stats(404).json({ message: "Budget not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const addExpensesToUserBudget = async (req, res) => {
  try {
    const expenses = await Expenses.insertMany(req.body)

    const { budgetId } = req.params;

    const budget = await Budget.findByIdAndUpdate(budgetId, { $push: { expenses: { $each: expenses } } });

    if (budget) {
        return res.json(budget);
    }
  
    res.status(404).json({ message: "Budget not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const editExpense = async (req, res) => {
  try {
    const { expenseId } = req.params;

    const expense = await Expenses.findByIdAndUpdate(expenseId, req.body)

    if (expense) {
      return res.json(expense)
    }

    res.status(404).json({ message: "Expense not found!"})

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteExpense = async (req, res) => {
    try {
      const { expenseId } = req.params

      const deleted = await Expenses.findByIdAndDelete(expenseId);
  
      if (deleted) {
        return res.status(200).send("Budget deleted!");
      }
  
      throw new Error("Budget not found!");

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
};
