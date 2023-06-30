const express = require("express");



const router = express.Router();

const messageController = require("../controller/messages_controller")


router.get('/',messageController.message);


module.exports = router;