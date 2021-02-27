// Code below is using code reference from Week 11 activities

// Set up dependencies
const fs = require("fs");
const dbNotes = require("../db/db.json");
const path = require("path");

module.exports = (app) => {
  //app.get
  app.get("/api/notes", (req, res) => {
    res.json(dbNotes);
  });
  //=================================

  //app.post
  app.post("/api/notes", (req, res) => {
    // Found the following link on how to use different ways to generate unique ids =>  https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
    req.body.id = Math.floor(Math.random() * 100);
    dbNotes.push(req.body);

    //writefile to db json file
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(dbNotes),
      (err) => {
        if (err) throw err;
      }
    );

    res.json({ dbNotes });
  });
  //=================================

  //app.delete
  app.delete("/api/notes/:id", (req, res) => {
    // Reference link for how to delete with unique id: https://stackoverflow.com/questions/55118708/how-remove-object-of-the-matched-req-params-id  and https://ultimatecourses.com/blog/remove-specific-item-from-array-javascript#avoiding-the-delete-keyword
    const reqId = req.params.id;
    const getNote = dbNotes.filter((note) => {
      return Number(note.id) === Number(reqId);
    });


    const deleteNote = dbNotes.splice(getNote, 1);

    //writefile to db json file
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(dbNotes),
      (err) => {
        if (err) throw err;
      }
    );

    res.json({ deleteNote, dbNotes });
  });
  //=================================
};
