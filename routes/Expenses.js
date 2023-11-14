import { Router } from "express";
import * as controllers from "../Controllers/Expenses.js";

const router = Router();

router.get("/", controllers.getExpenses);
router.get("/:id", controllers.getExpenses)
router.post("/", controllers.createExpenses);
router.put("/:id", controllers.updateExpenses);
router.delete("/:id", controllers.deleteExpenses);

export default router;