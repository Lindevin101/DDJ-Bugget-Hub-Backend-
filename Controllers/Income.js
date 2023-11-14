import Income from "../models/Income.js";

export const getIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await Income.findById(id);

    if (incomes) {
      return res.json(incomes);
    }

    res.status(404).json({ message: "Income not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createIncome = async (req, res) => {
  try {
    const income = new Income (req.body);
    await income.save();
    res.status(201).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await Income.findByIdAndUpdate(id, req.body);

    res.status(201).json(income);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Income.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Income deleted!");
    }

    throw new Error("Income not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};