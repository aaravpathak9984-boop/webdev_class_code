const express=require("express");

const port=3000;
const app=express();

app.get("/",(req,res)=>{


    console.log(req.params)

    res.json({
        "name":"Aarav pathak",
        "college":"msot"
    })
})

// '/' for static '/:' for dynamic like things that cahgnes

app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);

    //db ke andar jakr result ko chekc krna pdega
    //...
    res.send(`Got passed.... roll no. : ${req.params.roll}`)
})


//http://localhost:3000/search?name=%22aarav%22&adress=%22delhi%22&rollno=1 
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("data found in db");
})

app.listen(port,()=>{
    console.log("server is running at port : 3000")
})