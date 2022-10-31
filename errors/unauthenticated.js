import customAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class UnAuthenticatedError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
