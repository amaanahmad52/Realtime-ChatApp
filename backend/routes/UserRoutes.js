const {signup, login, logout, getAllUsers, getMyDetails} =require("../controllers/UserController")

const express = require('express')
const { isAuthenticated } = require("../utils/auth")
const router=express.Router()


router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)

//to get all the users
router.route("/getUsers").get(isAuthenticated, getAllUsers)
//to get logged in user details
router.route("/me").get(isAuthenticated, getMyDetails)


module.exports=router 