const express =require("express");
const app=express();

app.use((req,res,next)=>{

    console.log("middle ware 1 for mobile auth")

    //authentication

    let auth=true

    if(!auth){
        res.send("auth failed____try agian")
    }
    else{
        next()
    }



})
app.use((req,res,next)=>{
    console.log("midleware 2 for email auth")

    let auth =true
    if(!auth){
        res.send("auth failed recheck your email")
    }
    else next()

})

app.use((req,res,next)=>{
    let out=`url = ${req.url} and address is ${req.ip}`
    res.send(out)
    next()
})


app.post("/details",(req,res)=>{
    console.log("it provides detials ")

    conosle.log(req.body);

    res.send("data saved successfully...")
})

app.get('/about',(req,res)=>{
    res.send("in about page");
})



app.get("/",(req,res)=>{
    console.log("user in home page")
    res.send("in home page....")
})


app.listen(3200,()=>{
    console.log("server running at 3200...")
})