const express= require('express');
const User=require("../models/UserModel")
const asynchandler=require("../utils/asynchandler")
const dotenv=require('dotenv');
const getToken = require('../utils/tokenGenerationJWT');
dotenv.config()
exports.signup = asynchandler(async(req, res) =>{
    
        const{fullname,userName,gender,password,confirmpassword,email} = req.body;
        // console.log(req.body)
        if(password!==confirmpassword){
            return  res.status(400).json("Passwords do not match")
        }

        const founded=await User.findOne({userName})
        if(founded){
            return res.status(400).json({message:"User already exists"})
        } 
        
        if(gender==='M'){
            avatar="https://avatar.iran.liara.run/public/boy"
        }
        else{
            avatar="https://avatar.iran.liara.run/public/girl"
        }

        const user=await User.create({
        
            fullname,
            userName,
            email,
            gender,
            password
            // avatar:req.body.avatar
        })
        // console.log(user)
        // res.status(201).json({
        //     user,
        //     success: true
        // });
        getToken(user,200,res)
           
})
exports.login=asynchandler(async(req,res)=>{
    const {userName,password}=req.body;

    const userfind=await User.findOne({userName}).select("+password");
    if(!userfind){
        return res.status(400).json({message:"Bad Credentials"})
    } 

    
    const match=await userfind.comparePassword(password);
    if(!match){
        return res.status(400).json({message:"Bad credentials"})
    }
    
    //now create jwt token

    getToken(userfind,200,res)
    // const token = await userfind.getJWTTOKEN(); //function defined in usermodel
 
    // const options = {
   
    // expires: new Date(Date.now() + 86400000),
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV!=="developement" 
    // };
    
                                
    
    // return res.status(200).cookie("token", token, options).json({  //express method to set cookie res.cookie
    //   success: true,
    //   userfind,
    //   token
    // })
})

exports.logout=asynchandler(async(req,res)=>{
    await res.cookie("token",null,{   
        expires:new Date(Date.now()),
        httpOnly:true,
    //   secure: process.env.NODE_ENV!=="developement"
    })
    // console.log(new Date(Date.now()))
    res.status(200).json({ message: 'Logged out successfully' });
})
    
//to get all the users for the sidebar

exports.getAllUsers=asynchandler(async(req,res)=>{
    const id=req.userDetails._id
    // if(id===undefined || id===null){
    //     res.status(400).json({ message: "Please login"});
    // }
    const users = await User.find({ _id: { $ne: id } }).select("-password") //will exclude current loggined user
    if(!users){
        res.status(404).json([])
    }
    // console.log("hi")
    res.status(200).json({
        success: true,
        users
    })
})

//to get my details
exports.getMyDetails=asynchandler(async(req,res)=>{
    if (!req.userDetails) { //auth file seayega
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    const id=req.userDetails._id  //here we saved
    // console.log(id);
    const user = await User.findById(id);
    
    res.status(200).json({
      user
    });
    
})
   