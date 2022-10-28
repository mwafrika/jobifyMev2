import { Router } from "express";
import {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobsController.js";

const router = Router()
  .get("/", getAllJobs)
  .post("/", createJob)
  .get("/stats", showStats)
  .patch("/:id", updateJob)
  .delete("/:id", deleteJob);

export default router;
