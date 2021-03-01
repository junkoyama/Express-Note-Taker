// Code below is referenced from Week 11 activities

// DEPENDENCIES
// Path package installed to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // /notes should return to the note html
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to index html
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
