const mongoose = require('mongoose')
// var validator = require('validator');

const messageSchema=mongoose.Schema({

    sender:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    receiver:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    message:{
        type: String, 
        required: true,
    },
    
    //Message.createdAt , Message.updatedAt 
},{timestamps:true}) //mongoose automatically ss created at and updated at fields

module.exports =mongoose.model('Message',messageSchema)