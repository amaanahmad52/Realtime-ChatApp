const {signup, login, logout, getAllUsers} =require("../controllers/UserController")

const express = require('express')
const { isAuthenticated } = require("../utils/auth")
const router=express.Router()


router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').post(logout)

//to get all the users
router.route("/").get(isAuthenticated, getAllUsers)


module.exports=router 