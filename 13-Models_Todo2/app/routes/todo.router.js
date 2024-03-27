/* ------------------------------------------------------- */
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//!ROUTERS:
const todo = require("../controllers/todo.controller");
const router = require("express").Router();

//?list
// router.get("/", todo.list);

//? Create:
// router.post("/", todo.create);

//? Read
// router.get("/:id", todo.read);

//?Update
// router.put("/:id", todo.update);

//? Delete
//router.delete("/:id", todo.delete);


router.route("/")
//?list
.get(todo.list)
//? Create:
.post(todo.create)

router.route("/:id")
//? Read
.get(todo.read)
//?Update
.put(todo.update)
.patch(todo.update)
//? Delete
.delete(todo.delete)

module.exports = router;
