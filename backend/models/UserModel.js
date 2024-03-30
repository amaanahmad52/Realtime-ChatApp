const mongoose = require('mongoose')
var validator = require('validator');
const bcrypt = require('bcryptjs');
const dotenv=require('dotenv');
dotenv.config()
const jwt=require('jsonwebtoken')
const userSchema=mongoose.Schema({
    userName:{
        type: String,
        required: [true, "Please choose Your userName"],
        //  match: /^[A-Za-z0-9\s]+$/, // Regular expression to allow alphanumeric characters and spaces
        unique: true,
    },
    fullname: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,  ////////
      },
      avatar: {
       
          type: String,
          default:"https://avatar.iran.liara.run/public/46"
      },
      gender:{
        type: String,
        required: true,
         enum:["M", "F"],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });
 
//schema methods
  //apply bcrypt here only
  userSchema.pre("save",async function (next) { 

    if (!this.isModified("password")) {  
      next();
    }
    
    this.password =  await bcrypt.hash(this.password, 10);
  }); 

  //comapring password for login (bcrypt ka part)  .. created a custom method in schema
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  //creating json web token method

  userSchema.methods.getJWTTOKEN=async function(){  
    

    try {
      
      return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
      });
  } catch (error) {
      console.error('Error creating JWT:', error);
      throw error; 
  }
}

    //no we create model corresponding to this schema
module.exports= mongoose.model('User', userSchema);
