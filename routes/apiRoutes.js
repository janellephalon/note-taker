// Dependencies 
const fs = require('fs');

// Linking Notes 
// const db = require("../db/db.json")
var db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    // GET Route
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // GET by ID
    app.get("/api/notes/:id", function (req, res) {
        res.json(data[Number(req.params.id)]);
    });

    // POST Route
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        let uniqueID = (data.length).toString();
        console.log(uniqueID);
        newNote.id = uniqueID;
        data.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
        if(err) throw(err);
    });
    res.json(db);
    });

    // DELETE Route 
    app.delete("/api/notes/:id", function (req, res) {
        let noteID = req.params.id;
        let newID = 0;
        console.log(`Deleting note with id ${noteID}`);
        data = data.filter(currentNote => {
            return currentNote.id != noteId;
        });
        for(currentNote of db) {
            currentNote.id = newID.toString();
            newID++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
        });
}
