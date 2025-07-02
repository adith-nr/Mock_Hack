import express from "express";
import { promoptController } from "../controllers/prompt.controllers.js";

const router = express.Router();

router.post("/prompt",promoptController)
export default router;