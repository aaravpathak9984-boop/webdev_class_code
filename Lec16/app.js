const express=require('express');
const app=express();

const dotenv=require('dotenv');


const cookieParser=require('cookie-parser')

app.use(cookieParser());

dotenv.config();

const PORT=process.env.PORT;
const userRoute=require("./routes/userRoute");
const log = require('../../Projects/class_pro/middleware/log');

// app.use("/user",userRoute);
app.get("/",(req,res)=>{

    res.cookie("username","aa@0721")
    res.send("hey")
})

app.get("/payment",(req,res)=>{

    console.log(req.cookies);

    res.send("payment page ....");
    

})



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})