// Dependencies 
const fs = require('fs');
const router = require('express').Router();

// Linking Notes 
// const db = require("../db/db.json")
var db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    // GET Route  
    router.get("/notes/", function (req, res) {
        res.json(db);
    });

    // POST Route - Not Correct Route 
    router.post("/notes/", function (req, res) {
        const newNote = db.req.body;
        if (length === 0) {
            newNote.id = 1
        } else {
            newNote.id = db[db.length-1].id + 1;
        }
        db.push(newNote);
        let jsonNotes = JSON.stringify(db);


        fs.writeFileSync("./db/db.json", jsonNotes, function(err){
            if(err) {
                return console.logg(err);
            }
            console.log("Success!");
        });
        res.json(data);
    });

    // DELETE Route 
    router.delete("/api/notes/:id", function (req, res) {
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
