const fs = require('fs');

// let result=fs.readFileSync('file.txt',"utf8");
// console.log(result)
// Asynchronous way: The result is handled entirely inside the callback
fs.readFile("file.txt", 'utf8', (error, data) => {
    if (error) {
        throw error;
    }


    else{
    
    console.log(data); 
}
});

console.log(read)
