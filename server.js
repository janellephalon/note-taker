const express = require('express');

// Instantiate the Server
const app = express();

// Initate Port
const PORT = process.env.PORT || 3001;

// Parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Listener 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

