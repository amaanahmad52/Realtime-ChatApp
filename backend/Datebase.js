const mongoose=require('mongoose');

const connect=async()=>{
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');

        console.log('Connected to MongoDB')
    } catch (error) {
        console.log("some error occured on connecting to database", error);
    }
}
module.exports=connect