"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
//! Error Handler

//?ErrorHandler is middleware and has must be four parameters(error, request, response, next)
module.exports = (err, req, res, next) => {

    console.log("Error Handler Started")
 const errorStatusCode = res?.errorStatusCode || 500
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
    stack: err.stack,

  });
};
