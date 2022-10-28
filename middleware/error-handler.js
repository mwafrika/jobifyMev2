import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error, req, res, next) => {
  const defaultError = {
    StatusCodes: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "Internal server error",
  };
  res.status(defaultError.StatusCodes).json({
    message: error.message,
  });
};

export default errorHandlerMiddleware;
