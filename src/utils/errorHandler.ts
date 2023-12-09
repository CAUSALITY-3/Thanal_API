const constants = {
  NOT_FOUND: 404,
  VALIDATION_ERROR: 400,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

export const errorHandler = ({ err, response }, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const returnObj = {
    title: "",
    message: err?.message,
    stackTrace: err?.stack,
    response,
  };
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      returnObj.title = "Validation Failed";
      res.status(statusCode).json(returnObj);
      break;
    case constants.NOT_FOUND:
      returnObj.title = "Not Found";
      res.status(statusCode).json(returnObj);
      break;
    case constants.UNAUTHORIZED:
      returnObj.title = "Unauthoriseed";
      res.status(statusCode).json(returnObj);
      break;
    case constants.FORBIDDEN:
      returnObj.title = "Forbidden";
      res.status(statusCode).json(returnObj);
      break;
    case constants.SERVER_ERROR:
      returnObj.title = "Server Error";
      res.status(statusCode).json(returnObj);
      break;
    default:
      console.log("No Error, All good !");
      break;
  }

  next();
};
