const express = require("express");
const router = express.Router();

const postController = require("../controller/posts_controller")

router.get("/",postController.post)

module.exports = router;