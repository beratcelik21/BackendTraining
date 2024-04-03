"use strict";
/*-------------------------------------- *
BLOG API Mongoose

/*-------------------------------------- */
const express = require("express");
const app = express();

/*-------------------------------------- */

app.use(express.json()); //yukarıda kalmalı
/*-------------------------------------- */

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
require("./src/dbConnections"); //?Db Connection //dotnv  calıstıktan sonra
/*-------------------------------------- */

app.all("/", (req, res) => {
  res.send("Welcome Blog Api");
});
/*-------------------------------------- */

app.use("/blog", require("./src/routes/blogRoute"));

app.use(require("./src/errorHandler"));
app.listen(PORT, () => console.log(`Server Running on ${HOST}:${PORT}`));
/*-------------------------------------- */
