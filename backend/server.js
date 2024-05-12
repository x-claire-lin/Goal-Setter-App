import express from "express";
import colors from "colors";
import connectDB from "./config/connect";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middleware/errorMiddleware";
const PORT = process.env.PORT || 5050;

connectDB();
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
