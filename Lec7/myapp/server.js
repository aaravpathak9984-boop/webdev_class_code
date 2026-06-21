const express= require("express")
const app=express()

const fs=require("fs");


const data=require("./data.json")

// console.log(data)

let data=fs.readFileSync("data.txt","utf-8");
data=JSON.parse(data)


app.use((req,res,next)=>{
    console.log(`${req.url} running middle 1 `)

    next()
})

app.get("/",(req,res)=>{
    // res.send({

    //     "name":"aarav",
    //     age:40

    // })

    res.send(data)
})

app.get("/about",(req,res)=>{
    res.send("IN about section")

})

app.listen(3100,()=>{
    console.log("running live at server : 3100")
})


