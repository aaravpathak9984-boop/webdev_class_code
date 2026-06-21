// 1. Import the Express framework to simplify HTTP requests and routing
const express = require("express");

// 2. Initialize an Express application instance to configure your web server
const app = express();

// 3. Define the network port number (3000) where your server will listen for traffic
const port = 3000;

// 4. Import Node.js's built-in File System module to handle reading and writing files
const fs = require("fs");

// 5. Import a local JSON file (Node automatically parses it into a JavaScript object/array)
const data = require("./data.json");


// --- MIDDLEWARE CONFIGURATIONS ---

// 6. Tell Express to automatically serve static assets (HTML, CSS, JS, images) from the "public" folder
app.use(express.static("public"));

// 7. Tell Express to parse incoming URL-encoded data (typically sent via traditional HTML forms)
app.use(express.urlencoded({ extended: true }));

// 8. Tell Express to parse incoming JSON payloads (typically sent via modern frontend 'fetch' or 'axios' requests)
app.use(express.json());


// --- ROUTE HANDLERS ---

// 9. Handle HTTP GET requests at the root URL ("/") - e.g., http://localhost:3000/
app.get("/", (req, res) => {
    // Print a message in the backend terminal to track user activity
    console.log("User is in a home page");
    
    // Send a plain text message back to the user's browser screen
    res.send("you are in home page..");
});

// 10. Handle HTTP POST requests at "/register" (used when a user submits registration data)
app.post("/register", (req, res) => {
    // Take the incoming form data (req.body), turn it into a text string, 
    // tack a newline character (\n) on the end, and synchronously append it to "data.txt"
    fs.appendFileSync("data.txt", JSON.stringify(req.body) + "\n", "utf8");

    // Respond to the client so the browser knows the request succeeded and stops loading
    res.send("Registration completed");
});

// 11. Handle HTTP GET requests at "/data" to let frontends fetch your JSON data
app.get("/data", (req, res) => {
    // Send the contents of the 'data.json' file back to the browser/client
    res.send(data);
});


// --- SERVER INITIALIZATION ---

// 12. Command your app to boot up and start listening for incoming network requests on port 3000
app.listen(port, () => {
    // Log a message to your terminal so you know the server is up and running successfully
    console.log("server is running on port 3000");
});