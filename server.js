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
// we will need this if we need to manage all deployments on render (currently we moved frontend to vercel)
// app.use(express.static(path.resolve(__dirname, "./client/dist/")));
if (process.env.NODE_ENV !== "production") {
  app.use(cors()); 
} else {
  app.use(
    cors({
      origin: process.env.FRONTEND_URL || "https://jobify-mev2.vercel.app",
      credentials: true,
    })
  );
}
app.use(express.json());

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", auth, jobRoutes);
// we will need this if we need to manage all deployments on render (currently we moved frontend to vercel)
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
// });
// This is the main entry point for the server (to be removed if everything is on the same server)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Jobify API",
  });
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
