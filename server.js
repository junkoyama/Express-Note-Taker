// Code below is reference from Week 11 activities

// Set up the dependencies
// =============================================================
var express = require("express");
var apiRoutes = require("./routes/apiRoutes");

// Set up the Express App
// =============================================================
var app = express();
// changing code to bind to $PORT env var.
// Received error when deploying. Solution link: https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// =============================================================
apiRoutes(app);

// Server starts below from/on the PORT listed above
// =============================================================
app.listen(PORT, () => 
console.log(`Listening on PORT: ${PORT}`)
);