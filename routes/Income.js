import { Router } from "express";
import * as controllers from "../Controllers/Income.js";

const router = Router();

router.get("/", controllers.getIncome);
router.post("/", controllers.createIncome);
router.put("/:id", controllers.updateIncome);
router.delete("/:id", controllers.deleteIncome);

export default router;