const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');


router.post('/',userControllers.postcreateUser)
router.get('/home',userControllers.getHome)

router.get('/login',userControllers.postloginUser)

router.get('/chatroom',userControllers.getChatRoom)

module.exports = router