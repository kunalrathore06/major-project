const express = require("express");
const router = express.Router;

const messageController = require('../controller/messages_controller')

router.get('/messages', messageController.messages);

module.exports = router;