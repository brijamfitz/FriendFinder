// Dependencies/Requires
// =================================================================
var express = require('express');

// Set up Express App
// =================================================================
var app = express();
var PORT = process.env.PORT || 9000;

// Set up Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// ROUTER
// =================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server to begin listening
// =================================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})