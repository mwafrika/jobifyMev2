import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import morgan from "morgan";
import auth from "./middleware/auth.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.get("/", function (req, res) {
  res.json({ message: "Hello World!" });
});

app.get("/api/v1", function (req, res) {
  res.json({ message: "API" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", auth, jobRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connect();
