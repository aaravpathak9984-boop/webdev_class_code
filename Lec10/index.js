const express= require("express")
const app=express();



const fs=require("fs")



const port=3000;


// app.use((req,res,next))

app.set('view engine',"ejs");

let students={
    name:"Aarav Pathak",
    roll:1,
    age:19
};
let color="red"
let flag=5;
app.get("/",(req,res)=>{

    // console.log(req.body);
    // console.log("user in home page")
    // // res.send("you are in home page");
    // res.render("user",{students,color,flag})

    console.log(req.url)

    res.send("HOme Page..")

})

app.get("/about",(req,res)=>{
    console.log(req.url)
    res.send("you are in about seciton thankyu for visiting")
})







app.listen(port,()=>{
    console.log("server is running at port: 3000")
})
