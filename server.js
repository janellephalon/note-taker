const express = require('express');
const fs = require('fs');
const path = require('path');

// Instantiate the Server
const app = express();

// Initate Port
const PORT = process.env.PORT || 3001;

// Initialize Notes
let userNotes = [];

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Listener 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

