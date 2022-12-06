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
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const app = express();

app.use(express.static(path.resolve(__dirname, "./client/dist/")));
app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", auth, jobRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

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
