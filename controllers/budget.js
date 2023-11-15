import Budget from "../models/Budget";

export const createBudget = async (req, res) => {
  try {
    const budget = new Budget(req.body);
    await budget.save();
    res.status(201).json(budget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

  export const getBudget = async (req, res) => {
    try {
      const { id } = req.params;
      const budget = await Budget.findById(id);
  
      if (budget) {
        return res.json(budget);
      }
  
      res.stats(404).json({ message: "Budget not found!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  
  export const updateBudget = async (req, res) => {
    try {
      const { id } = req.params;
      const budget = await Budget.findByIdAndUpdate(id, req.body);
  
      res.status(201).json(budget);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteBudget = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Budget.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Budget deleted!");
      }
  
      throw new Error("Budget not found!");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
