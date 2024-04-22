const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors')

const { connectDB } = require('./src/db/index.js');


const app = express();

const PORT = process.env.PORT || 8000;



dotenv.config({
    path: './.env'
});

// Enable CORS for all routes
app.use(cors());

// Connect to the database
connectDB();

// Define a route for the homepage
app.get("/", (req, res) => {
    res.send("Task Completed -  API to add/edit/count data ");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
