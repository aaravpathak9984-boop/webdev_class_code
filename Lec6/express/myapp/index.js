const express = require("express");
const path = require("path"); 

const app = express();
const port = 3300; // Define your port at the top

// 1. Home Route
app.get('/', (req, res) => {
    console.log("a user in a home page");
    res.send("data send successfully ...");
});

// 2. About Route (Handles only GET requests)
app.get('/about', (req, res) => {
    console.log("Right now in about page");
    res.send("you are right now in about section");
});

// 3. Fallback About Route (Handles POST, PUT, DELETE requests to /about)
app.all('/about', (req, res) => {
    console.log("Non-GET request to about section");
    res.send("data abhi nhi jayega");
});

// 4. Universal Catch-all Route (Must be at the very bottom of your routes)
// This catches ALL HTTP methods and ALL incorrect URLs
app.all("*", (req, res) => {
    console.log("Universal route fallback triggered");
    res.status(404).send("404 error page - path wrong hai");
});

// 5. Server Listener (Uses the variable name directly)
app.listen(port, (err) => {
    if (err) return console.log("Error starting server:", err);
    console.log(`App is running on http://localhost:${port}`);
});
    