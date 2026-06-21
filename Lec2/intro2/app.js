const express=require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("middle ware >>");

    next();

})


app.use((req,res,next)=>{
    console.log("middle ware >> dobara");

    next();

})

app.use((err,res,req,next)=>{
    console.log(err);
    
})

    
app.get("/",(req,res)=>{
    res.send("Hello how are you all god");
})

app.get("/courses",(req,res)=>{
    res.send("hi can't go through it ..")
})

app.listen(3000,()=>{
    console.log('user listening to 3000')
})