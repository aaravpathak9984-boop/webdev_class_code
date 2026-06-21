const http= require("http");
const fs=require("fs");

const {students}=require("./students.js")

const server=http.createServer((req,res)=>{
    if(req.method=="GET"){
        console.log("wait .. working on request");

        let data=JSON.stringify(students);

        res.write(data)
        res.write("hi aarav");
        res.end("Data send successfully")
    }

    if(req.method=="POST"){
        res.end("data saved successfully");
    }
})

server.listen(2200,(err)=>{
    if(err)console.log(err);

    console.log("server is running")
})