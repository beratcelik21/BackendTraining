"use strict";
/*-------------------------------------- *
             BLOG API ROUTES
/*-------------------------------------- */
const router = require("express").Router();

const { route } = require("express/lib/router");

const { BlogPost } = require("../controllers/blogController");

router.route("/posts").get(BlogPost.list).post(BlogPost.create);

router
  .route("/posts/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update) //?puth patch aynı
  .patch(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
