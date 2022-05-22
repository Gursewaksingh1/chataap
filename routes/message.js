const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/message')
// const app = require('../app');
// const io = app.app.get("io")


router.get('/createmsg',messageControllers.createmsg)

module.exports = router