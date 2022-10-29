import customAPIError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class NotFoundError extends customAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
