const express = require('express')
const { createMessage, getMessages } = require('../controllers/MessageController')
const { isAuthenticated } = require('../utils/auth')
const router=express.Router()

router.route("/send/:id").post(isAuthenticated,createMessage)
router.route("/getMessages/:id").get(isAuthenticated,getMessages)

module.exports=router 