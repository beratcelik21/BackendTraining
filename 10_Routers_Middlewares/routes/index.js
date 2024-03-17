"use strict";

const { request } = require("express");

/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

// express.Router()
/* express.Router() */
// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
/*
router.get("/", (req, res) => res.send({ message: "Home Area" }));
router.get("/about", (req, res) => res.send({ message: "About Area" }));
router.get("/user/:id", (req, res) => res.send({ message: "User Area" }));
*/
const { middleFunc1, middleFunc2 } = require("../middlewares/")
router.use(middleFunc1, middleFunc2)

//?Router.route()
router
  .route("/")
  .get((req, res) => res.send({ message: "get" }))
  .post((req, res) => res.send({ message: "post" }))
  .put((req, res) => res.send({ message: "put" }))
  .delete((req, res) => res.send({ message: "delete" }));

module.exports = router;
