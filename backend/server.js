const express = require('express');
const cookieParser=require('cookie-parser');
const app = express(); //will allow to extract req.body objects
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config()
app.use(cookieParser());
const bodyParser = require('body-parser');


const cors=require('cors');
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));



const connect=require("./Datebase")
connect()
//middleware mounting
app.use('/api/chatapp', require('./routes/UserRoutes'));
app.use('/api/chatapp', require('./routes/MessageRoute'));




const port=process.env.PORT ||5000

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})
