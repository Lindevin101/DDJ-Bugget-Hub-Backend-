import Expenses from "../models/Expenses.js";

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.find();
    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expenses = await Expenses.findById(id);

    if (expenses) {
      return res.json(expenses);
    }

    res.status(404).json({ message: "Expenses not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createExpenses = async (req, res) => {
  try {
    const character = new Expenses (req.body);
    await expenses.save();
    res.status(201).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const expenses = await Expenses.findByIdAndUpdate(id, req.body);

    res.status(201).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expenses.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Expenses deleted!");
    }

    throw new Error("Expenses not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};