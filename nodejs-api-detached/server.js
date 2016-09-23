// Loading dependencies.
const express = require('express');

// Defining variables and constants.
const PORT = 8080;

// Creating an Express.js application.
const app = express();

// Listening for root-level requests and returning a textual response.
app.get('/', function(request, response) {
    response.send('Hello world. Welcome to the future. I am detached.');
});

// Making the application listen to requests on the specified port.
app.listen(PORT);

// Outputting information to the console.
console.log(`Running on http://localhost:${PORT}`);
