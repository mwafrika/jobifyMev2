import { BadRequestError, NotFoundError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import Job from "../models/Job.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !position) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

const updateJob = async (req, res) => {
  const { position, company } = req.body;
  const { id: jobId } = req.params;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: req.user.userId },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};
const showStats = async (req, res) => {
  res.send("View Stats");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
