import { Router } from 'express';
import * as controllers from "../controllers/budget.js"

const router = Router()

router.post("/", controllers.createBudget);
router.get("/:id", controllers.getBudget);
//router.post("/", controllers.createCharacter);
router.put("/id", controllers.updateBudget);
router.delete("/:id", controllers.deleteBudget);



export default router;
