import { Router } from "express";
import budgetRoutes from "./budget.js"
import userRoutes from "./user.js"

// Initialize an instance of the Express Router. The router variable will be used to define routes and middleware specific to this router instance.
const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

// MOUNT ROUTES AND PREPEND ALL ROUTES WITH /whatever-you-want
router.use("/budget", budgetRoutes);
router.use("/", userRoutes);

export default router;