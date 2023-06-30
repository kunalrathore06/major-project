const express = require("express");



const router = express.Router();

const homeController = require("../controller/index_controller")

// router.get('index',);

console.log("our first router is being loaded")

router.get('/',homeController.home);

router.use('/message',require('./message'));

router.use('/post',require('./post'))

module.exports = router;