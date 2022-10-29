import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error, req, res, next) => {
  const defaultError = {
    StatusCodes: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Internal server error",
  };
  if (error.name === "ValidationError") {
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST;
    defaultError.message = Object.values(error.errors)
      .map((err) => err.message)
      .join(", ");
  }
  if (error.code && error.code === 11000) {
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      error.keyValue
    )} field has to be unique`;
  }
  res.status(defaultError.StatusCodes).json({
    message: defaultError.message,
  });
};

export default errorHandlerMiddleware;
