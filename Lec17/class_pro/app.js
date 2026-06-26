const express =require("express");
const app=express();
const log=require("./middleware/log");

const gold=require("./middleware/gold");


//databse required

const connectDB=require("./config/db");

//connceting gig route

const gigRouter=require("./routes/gigRouter");



const port=3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(log);

app.use("/gold",gold);




app.use("/",gigRouter)




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
