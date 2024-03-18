"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *

app.get("/", (req, res) => {
throw new Error("Error Message")
});
/* ------------------------------------------------------- *

app.get("/user/:id", (req, res) => {

  const id = req.params?.id || 0

  try {
    if (isNaN(id)) {
    //   throw new Error("ID is not a number" /*{cause: "params.id" + id}*/ /*);*/
/* ------------------------------------------------------- *
//!yukarıdakı kod ile beraber
    } else {

      res.send({
        message: "ok",
        id
      });
    }
  } catch (err) {
    res.send({
      error: true,
      message: err.message
    });
  }
});
/* ------------------------------------------------------- *

app.get("/*", (req, res) => {

    res.errorStatusCode = 404
  throw new Error("Error Message", {cause:"No reason :)"});
});

/* ------------------------------------------------------- *
const asyncFunction = async() => {
  throw new Error("Error in async-function")
}
//? Control ith catch(next)

app.get("/async", async (req, res, next) => {
  // await asyncFunction().then().catch((err) =>{next(err)})
  await asyncFunction().then().catch(next)//catch error by errorHandler

})
/* ------------------------------------------------------- */
//$ npm i express-async-errors
require("express-async-errors")

app.get("/async", async(req, res, next) =>{
  throw new Error("Error in async-function")
})
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

/* ------------------------------------------------------- *
//! Error Handler

//?ErrorHandler is middleware and has must be four parameters(error, request, response, next)
const errorHandler = (err, req, res, next) => {

    console.log("Error Handler Started")
 const errorStatusCode = res?.errorStatusCode || 500
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
    stack: err.stack,

  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

//?ErrorHandler:
app.use(require("./errorHandler"))
/* ------------------------------------------------------- */


app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
