"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//* Data Receiving:
//?Accept JSON and convert to object:
app.use(express.json())
//? Accept TEXT
app.use(express.text())
//?Accept Form-Data:
app.use(express.urlencoded({extented: true}))


//? Open Static
app.use("/static", express.static("./public/images"))

app.all("/", (req, res) => {
  res.send({
    body:req.body,
    message: "Hello",
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
