"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */
const router = require("express").Router();

const User = require("../controllers/userController");

// User:
router.route("/")
.get(User.list)
.post(User.create);
router
  .route("/:userId")
  .get(User.read)
  .put(User.update) // put patch aynı
  .patch(User.update)
  .delete(User.delete);

module.exports = router;
