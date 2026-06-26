const mongoose=require("mongoose");

const gigSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    area:String
});