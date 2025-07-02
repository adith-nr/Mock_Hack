import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import promptRoutes from "./routes/prompt.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { ConnectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

ConnectDB()

app.use(cors());

app.use(express.json());

app.use(cookieParser())

app.use("/api/Bot",promptRoutes)
app.use("/api/auth",authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

