const fs=require('fs');

const http=require('http');






//to write file

fs.appendFile("test.txt"," hello muy dear friends",(err)=>{
    if(err)console.log(err);
    else console.log("all good");
})

//to append likhe m add krna

//to rename 

// fs.rename("test.txt","hello.txt",(err)=>{
//     if(err)console.log(err)
//     console.log("done");
// })





const server=http.createServer((req,res)=>{
    fs.writeFile("hello.txt","user logged in ",(err)=>{
        if(err)console.log(err);
        else console.log("good all")
    })

    res.end("hi gm");
})

server.listen(3000)