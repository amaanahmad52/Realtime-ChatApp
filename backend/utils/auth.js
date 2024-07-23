const asynchandler = require("./asynchandler");
const cookies=require("cookie-parser")
const dotenv=require('dotenv');
const User=require("../models/UserModel")
dotenv.config()
const jwt=require("jsonwebtoken")
exports.isAuthenticated=asynchandler(async(req,res,next)=>{

    const {token}=req.cookies
    // console.log(token)
    if(!token){
        return res.status(400).json("Unauthorized")
    }

    const decoded =  await jwt.verify(token, process.env.JWT_SECRET);
    const userId=decoded.id
    // console.log(userId)
    req.userDetails=await User.findById(userId).select("-password") //so that password na jaaaye
    next()
})