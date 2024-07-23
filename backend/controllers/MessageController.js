
const asynchandler=require("../utils/asynchandler")
const dotenv=require('dotenv');
dotenv.config()
const Message = require('../models/MessageModel')
const Conversation=require('../models/ConversationModel')
exports.createMessage=asynchandler(async(req,res)=>{
    let {message}=req.body
    const receiver=req.params.id
    // const {receiver}=req.params  or this
    const sender=req.userDetails._id
    
    //find the conversation`s participants array (ki kya pehle kbhi baat hui ya nhi)
    
    let baathui=await Conversation.findOne({
        participants:{$all: [sender,receiver]}
    })
     
    if(!baathui){
        baathui=await Conversation.create({
          participants:[sender,receiver]  
          //by default msg is empty now
        })
    }
    //now add this message in conversation

    //firstly create message
    
    
    const messageSent=new Message({ 
        
        message,
        sender,
        receiver
    })
  
    //now add this conversation
    if(messageSent){
        baathui.messages.push(messageSent._id)
    }

    // await baathui.save()
    // await messageSent.save()

    await Promise.all([ baathui.save(), messageSent.save()]) //will run parallely and save time

    res.status(200).json({
        success: true,
        messageSent
    });
})

//get message between two users

exports.getMessages=asynchandler(async(req,res)=>{
    
    const receiver=req.params.id;
    const sender=req.userDetails._id
    // console.log(receiver);
    // console.log(sender);
    const baatein=await Conversation.findOne({
        participants:{$all: [sender,receiver]} //from all the available docs find all conversed message of given users
    }).populate("messages")
    //populate se ye hoga ki, humko ab message id nhi milegi balki direct messages mil jeage iss corresponding message id ke jo Message schema pe hai

    let chatHistory=[];

    // console.log(baatein);
    if(!baatein){
        res.status(200).json({
            success: false,
            chatHistory
        })
    }

    //from conversation model we will get all the messages ids of the corresponding sender and receiver
    //now in messagew model we need to fnd all those  docs which have these msg id 


    // baatein.messages.forEach(async (id)=>(
    //    chatHistory.push(id.message)
    // ))
    for (const id of baatein.messages) {
        chatHistory.push({
            sender: id.sender,
            receiver: id.receiver,
            createdAt: id.createdAt,
            message: id.message
        });
    }
    res.status(200).json({
        // success: true,
        chatHistory   //will have all the converations messaeg
    })

})