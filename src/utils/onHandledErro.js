
function onHandlerError(fn) {
  return (req, res, next) => fn(req, res, next).catch((error) => {
    console.log(error);
    sentry.captureException(error);
    // const [status, err] = ErrorResponses(error);
    return res.status(509).send(err);
  });
}

module.exports = onHandlerError;
