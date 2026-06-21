const express=require("express")
const app=express()
const port=3000

const fs=require("fs")
let i=0;

app.use("/public",express.static("public"))

app.use("/assets",express.static("assets"))

app.use((req,res,next)=>{
    // const timestamp=new Date();

    // // console.log(timestamp);


    // const log=`client data ${i} = ${timestamp} ,${req.ip},${req.ip},${req.url} \n`
    // i++;

    // fs.appendFileSync("log.txt",log,"utf8")




    next();

})



app.get("/",(req,res)=>{

    console.log("User is the homepage..")
    res.send("Welcome to the homepage")
})


app.post("/",(req,res)=>{
    res.send("user registration completed..")
})





app.listen(port,()=>{
    console.log(`Server is running in the port ${port}` )
})