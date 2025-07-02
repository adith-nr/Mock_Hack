import express from "express";
import { promoptController } from "../controllers/prompt.controllers.js";
import { protectRoute } from "../middleware/protect.js";
const router = express.Router();

router.post("/prompt",protectRoute,promoptController)

export default router;