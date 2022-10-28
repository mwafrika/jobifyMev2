const errorHandlerMiddleware = (error, req, res, next) => {
  res.status(500).json({
    message: "There was an error",
  });
};

export default errorHandlerMiddleware;
