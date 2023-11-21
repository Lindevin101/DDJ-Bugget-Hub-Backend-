import { Router } from 'express';
import * as controllers from "../controllers/expenses.js"

const router = Router()

router.put("/budget/:budgetId", controllers.addExpenseToBudget)
router.put("/budget/:budgetId/expenses", controllers.addExpensesToUserBudget)
router.put("/:expenseId", controllers.editExpense)
router.delete("/:expenseId", controllers.deleteExpense)

export default router;
