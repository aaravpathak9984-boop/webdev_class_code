const express = require("express");
const app = express();
const port = 3000;

const fs=require("fs")


// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage Route
app.get("/", (req, res) => {
    console.log("user in homepage");

    fs.appendFileSync("log.txt",req.body,"utf8")
    
    res.send("you are in homepage");
});

// Registration Route
app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("user registration completed");
});

// Start Server
app.listen(port, () => {
    console.log("server is running on port: ", port);
});

